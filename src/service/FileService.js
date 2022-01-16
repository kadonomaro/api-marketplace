import * as uuid from "uuid";
import * as path from "path";

const fileExtension = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
};

class FileService {
    save(file, entity) {
        try {
            const fileName =
                uuid.v4() + (fileExtension[file.mimetype] || ".jpg");
            const filePath = path.resolve(`static/${entity}`, fileName);
            file.mv(filePath);
            return fileName;
        } catch (e) {
            console.log(e);
        }
    }
}

export default new FileService();
