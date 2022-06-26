import { Timestamp } from "firebase/firestore";

/**
 * Get current date
 */
const getDateNow = (): string => {
    return Timestamp.now().toDate().toString();
};

export { getDateNow };
