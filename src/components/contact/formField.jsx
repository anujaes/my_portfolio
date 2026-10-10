import { InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import Icon         from "../common/Icon";
import { COLORS }   from "../../constants/theme";

const INPUT_SX = {
    borderRadius        : '10px',
    backgroundColor     : COLORS.field,
    fontSize            : 15,
    transition          : 'background-color 200ms, box-shadow 200ms',
    alignItems          : 'flex-start',
    '& input, & textarea': { paddingY: '13px' },
    '& input::placeholder, & textarea::placeholder': { color: COLORS.muted, opacity: 1 },
    '& fieldset'        : { borderColor: COLORS.mist, transition: 'border-color 200ms' },
    '&:hover fieldset'  : { borderColor: `${COLORS.mistDeep} !important` },
    '& .field-icon'     : { color: COLORS.muted, transition: 'color 200ms' },
    '&.Mui-focused'     : { backgroundColor: COLORS.surface, boxShadow: '0 0 0 4px var(--track)' },
    '&.Mui-focused fieldset': { borderColor: `${COLORS.ink} !important`, borderWidth: '1px !important' },
    '&.Mui-focused .field-icon': { color: COLORS.ink },
};

// One labelled input with a leading icon, styled to match the page palette.
function FormField({ field, value, onChange }) {
    const id = `contact-${field.name}`;
    const multiline = field.type === 'textarea';

    return (
        <div>
            <InputLabel
                htmlFor     = {id}
                required
                sx          = {{ fontSize: 13, fontWeight: 600, color: COLORS.slate, marginBottom: 0.8, '& .MuiFormLabel-asterisk': { color: COLORS.muted } }}
            >
                {field.label}
            </InputLabel>
            <OutlinedInput
                id          = {id}
                name        = {field.name}
                type        = {multiline ? undefined : field.type}
                placeholder = {field.placeholder}
                value       = {value}
                onChange    = {onChange}
                multiline   = {multiline}
                rows        = {field.rows}
                required
                fullWidth
                sx          = {INPUT_SX}
                startAdornment = {field.icon && (
                    <InputAdornment position="start" sx={{ marginTop: '12px !important', height: 'auto' }}>
                        <Icon name={field.icon} className="field-icon" fontSize="small" />
                    </InputAdornment>
                )}
            />
        </div>
    );
}

export default FormField;
