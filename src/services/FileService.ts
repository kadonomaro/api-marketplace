import * as uuid from "uuid";
import * as path from "path";
import fs from "fs";
import { UploadedFile } from "express-fileupload";

const fileExtension: { [k: string]: string } = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
};

class FileService {
    /**
     * Save file to static directory
     * @param { File } file
     * @param { String } entityName
     * @return {*}
     */
    save(file: UploadedFile | UploadedFile[], entityName: string) {
        try {
            if (Array.isArray(file)) {
                file = file[0];
            }
            const fileName = uuid.v4() + (fileExtension[file.mimetype] || ".jpg");
            const filePath = path.resolve(`static/${entityName}`, fileName);
            file.mv(filePath);
            return fileName;
        } catch (e) {
            console.log(e);
        }
    }

    /**
     * Remove file from static directory
     * @param { String } fileName
     * @param { String } entityName
     */
    remove(fileName: string, entityName: string) {
        try {
            const filePath = path.resolve(`static/${entityName}`, fileName);
            fs.unlink(filePath, (message) => {
                console.log(message);
            });
        } catch (e) {
            console.log(e);
        }
    }
}

export default new FileService();
