import { doc, collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../db";
import { getDateNow } from "../utils";

export default class BaseService {
    private entityName;

    constructor(entityName: string) {
        this.entityName = entityName;
    }

    /**
     * Create new entity
     * @param { Object } entity
     * @return {Promise<*>}
     */
    async create(entity: object): Promise<any> {
        try {
            const docRef = await addDoc(collection(db, this.entityName), {
                createdAt: getDateNow(),
                updatedAt: getDateNow(),
                ...entity,
            });
            const docSnap = await getDoc(docRef);
            return { id: docSnap.id, ...docSnap.data() };
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    /**
     * Get all entities from database
     * @return {Promise<*>}
     */
    async getAll(): Promise<any[]> {
        const querySnapshot = await getDocs(collection(db, this.entityName));
        const response: any = [];
        querySnapshot.forEach((doc) => {
            response.push({ id: doc.id, ...doc.data() });
        });
        return response;
    }

    /**
     * Get entity from database by id
     * @param { String, Number } id
     */
    async getOne(id: string): Promise<any> {
        const docRef = doc(db, this.entityName, id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return { error: true, message: "Документ не найден" };
        }
        return { id: docSnap.id, ...docSnap.data() };
    }

    /**
     * Update entity in database
     * @param { Object } document
     * @return {Promise<*>}
     */
    async update(document: any): Promise<any> {
        if (!document.id) {
            return { error: true, message: `Не указан идентификатор для [${this.entityName}]` };
        }

        const docRef = doc(db, this.entityName, document.id);
        await updateDoc(docRef, {
            updatedAt: getDateNow(),
            ...document,
        });
    }

    /**
     * Delete entity from database by id
     */
    async delete(id: string): Promise<any> {
        if (!id) {
            return { error: true, message: `Не указан идентификатор для [${this.entityName}]` };
        }
        const docRef = doc(db, this.entityName, id);
        await deleteDoc(docRef);
    }
}
