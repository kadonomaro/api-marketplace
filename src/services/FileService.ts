import * as uuid from "uuid";
import * as path from "path";
import fs from "fs";

const fileExtension = {
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
    save(file, entityName) {
        try {
            const fileName =
                uuid.v4() + (fileExtension[file.mimetype] || ".jpg");
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
    remove(fileName, entityName) {
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
