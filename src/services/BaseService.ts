import { doc, collection, addDoc, getDoc, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../db";

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
            const docRef = await addDoc(collection(db, this.entityName), { createdAt: Timestamp.now(), ...entity });
            const docSnap = await getDoc(docRef);
            return docSnap.data();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    /**
     * Get all entities from database
     * @return {Promise<*>}
     */
    async getAll() {
        const querySnapshot = await getDocs(collection(db, this.entityName));
        const response: any = [];
        querySnapshot.forEach((doc) => {
            response.push(doc.data());
        });
        return response;
    }

    /**
     * Get entity from database by id
     * @param { String, Number } id
     * @return {Promise<Query<any, any, {}, any>>}
     */
    async getOne(id: string): Promise<any> {
        const docRef = doc(db, this.entityName, id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return { error: true, message: "Document not found" };
        }
        return docSnap.data();
    }

    /**
     * Update entity in database
     * @param { Object } entity
     * @return {Promise<*>}
     */
    async update(entity: any): Promise<any> {
        if (!entity._id) {
            throw new Error(`Не указан идентификатор для [${this.entityName}]`);
        }
    }

    /**
     * Delete entity from database by id
     * @param { String, Number } id
     * @return {Promise<awaited Query<any, any, {}, any> | Query<any, any, {}, DocType>>}
     */
    async delete(id: string | number): Promise<any> {
        if (!id) {
            throw new Error(`Не указан идентификатор для [${this.entityName}]`);
        }
    }
}
