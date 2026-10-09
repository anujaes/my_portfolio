import emailjs              from '@emailjs/browser';
import { EMAILJS_CONFIG }   from '../constants/email';

export const isEmailConfigured = () => Object.values(EMAILJS_CONFIG).every(Boolean);

// Sends a <form> through EmailJS. Field names must match the template
// variables: name, reply_to, phone, message.
export function sendContactForm(formElement) {
    if (!isEmailConfigured()) {
        return Promise.reject(new Error('EmailJS is not configured: fill in EMAILJS_CONFIG in src/constants/email.js'));
    }
    const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;
    return emailjs.sendForm(serviceId, templateId, formElement, { publicKey });
}
