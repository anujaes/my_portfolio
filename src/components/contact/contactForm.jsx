import { useRef, useState }         from "react";
import { Alert, AlertTitle, Box, Button, CircularProgress, Snackbar, Typography } from "@mui/material";
import ArrowForwardRounded          from "@mui/icons-material/ArrowForwardRounded";
import FormField                    from "./formField";
import { useInView }                from "motion/react";
import { usePortfolioStore }        from "../../store/usePortfolioStore";
import { sendContactForm }          from "../../utils/email";
import { COLORS }                   from "../../constants/theme";


const emptyValues = (fields) => Object.fromEntries(fields.map((f) => [f.name, '']));

// Contact form sent with EmailJS. Field names (name, reply_to, phone, message)
// match the EmailJS template variables.
function ContactForm() {
    const form       = usePortfolioStore((s) => s.contact.form);
    const formRef    = useRef(null);
    const cardRef    = useRef(null);
    const inView     = useInView(cardRef, { once: true, amount: 0.1 });
    const [values, setValues]   = useState(() => emptyValues(form.fields));
    const [sending, setSending] = useState(false);
    const [result, setResult]   = useState(null);   // 'success' | 'error' | null

    const handleChange = (event) => setValues({ ...values, [event.target.name]: event.target.value });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSending(true);
        try {
            await sendContactForm(formRef.current);
            setValues(emptyValues(form.fields));
            setResult('success');
        } catch (error) {
            console.error('Email send failed:', error?.text || error?.message);
            setResult('error');
        } finally {
            setSending(false);
        }
    };

    const message = result && form[result];

    return (
        <Box ref={cardRef} className={`contact-form-card ${inView ? 'is-visible' : ''}`} padding={{ xs: 3, md: 5 }}>
            <span className="edge edge-left" />
            <span className="edge edge-top" />
            <span className="edge edge-bottom" />

            <Typography
                component       = "span"
                fontSize        = {13}
                fontWeight      = {600}
                color           = {COLORS.slate}
                bgcolor         = {COLORS.mist}
                paddingX        = {1.5}
                paddingY        = {0.5}
                borderRadius    = {5}
                display         = "inline-block"
            >
                {form.eyebrow}
            </Typography>
            <Typography variant="h4" fontWeight={700} marginTop={1.5} marginBottom={3} fontSize={{ xs: 26, md: 32 }}>
                {form.heading}
            </Typography>

            <Box component="form" ref={formRef} onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2.2}>
                <Box display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }} gap={2.2}>
                    {form.fields.map((field) => (
                        <Box key={field.name} gridColumn={field.width === 'half' ? 'auto' : '1 / -1'}>
                            <FormField field={field} value={values[field.name]} onChange={handleChange} />
                        </Box>
                    ))}
                </Box>
                <Button
                    type        = "submit"
                    variant     = "contained"
                    size        = "large"
                    disabled    = {sending}
                    endIcon     = {sending
                                    ? <CircularProgress size={18} sx={{ color: COLORS.onInk }} />
                                    : <ArrowForwardRounded className="send-arrow" />}
                    sx          = {{
                                    marginTop       : 0.5,
                                    height          : 50,
                                    borderRadius    : '10px',
                                    backgroundColor : COLORS.ink,
                                    color           : COLORS.onInk,
                                    fontSize        : 15,
                                    fontWeight      : 600,
                                    letterSpacing   : '0.02em',
                                    textTransform   : 'none',
                                    boxShadow       : `0 8px 20px -8px ${COLORS.shadow}`,
                                    '& .send-arrow' : { transition: 'transform 200ms' },
                                    '&:hover'       : { backgroundColor: COLORS.inkHover, boxShadow: `0 10px 24px -8px ${COLORS.shadow}` },
                                    '&:hover .send-arrow': { transform: 'translateX(4px)' },
                                    '&.Mui-disabled': { backgroundColor: COLORS.slate, color: COLORS.onInk },
                                }}
                >
                    {sending ? form.sending : form.submit}
                </Button>
            </Box>

            <Snackbar
                open                = {Boolean(result)}
                autoHideDuration    = {6000}
                onClose             = {() => setResult(null)}
                anchorOrigin        = {{ vertical: 'bottom', horizontal: 'center' }}
            >
                {message ? (
                    <Alert severity={result} variant="filled" onClose={() => setResult(null)}>
                        <AlertTitle>{message.title}</AlertTitle>
                        {message.description}
                    </Alert>
                ) : <span />}
            </Snackbar>
        </Box>
    );
}

export default ContactForm;
