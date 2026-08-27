// src/utils/phoneValidation.js
// Indian mobile number validation — shared between contact/booking forms.
// Accepts: 10 digits starting 6-9, optionally prefixed with country code 91.
// Examples: "9477025830", "91 9477025830", "919477025830"

export const INDIAN_PHONE_REGEX = /^(91[6-9]\d{9}|[6-9]\d{9})$/;

export const PHONE_REQUIRED_MESSAGE = "Phone number is required.";
export const PHONE_INVALID_MESSAGE =
  "Enter a valid Indian mobile number (e.g. 91 9477025830 or 9477025830).";

/**
 * Strip anything that isn't a digit or a space. Use as the onChange handler
 * so pasted text with letters/symbols is stripped instantly, not just
 * blocked on keypress.
 */
export function sanitizePhoneInput(rawValue) {
  return (rawValue || "").replace(/[^0-9 ]/g, "");
}

/**
 * Keydown guard so letters/symbols physically cannot be typed.
 * Allows digits, a single space, and standard control/navigation keys.
 */
export function handlePhoneKeyDown(e) {
  const allowedControlKeys = [
    "Backspace",
    "Delete",
    "Tab",
    "Escape",
    "Enter",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
    "Home",
    "End",
  ];

  if (allowedControlKeys.includes(e.key)) return;
  // Allow copy/paste/select-all/cut shortcuts
  if (e.ctrlKey || e.metaKey) return;
  // Allow digits and space; block everything else (letters, +, -, (, ), ., etc.)
  if (!/^[0-9 ]$/.test(e.key)) {
    e.preventDefault();
  }
}

/** Validates a phone value already limited to digits/spaces. */
export function isValidIndianPhone(value) {
  const digitsOnly = (value || "").replace(/\s+/g, "");
  return INDIAN_PHONE_REGEX.test(digitsOnly);
}

/**
 * Full validation used before submit / on the server.
 * Returns an error message string, or null if valid.
 */
export function validateIndianPhone(value, { required = true } = {}) {
  const trimmed = (value || "").trim();
  if (!trimmed) {
    return required ? PHONE_REQUIRED_MESSAGE : null;
  }
  if (!isValidIndianPhone(trimmed)) {
    return PHONE_INVALID_MESSAGE;
  }
  return null;
}
