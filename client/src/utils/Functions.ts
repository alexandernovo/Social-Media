export async function readFileDataAsByteArray(file: File): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            if (event.target && event.target.result) {
                const arrayBuffer = event.target.result as ArrayBuffer;
                resolve(new Uint8Array(arrayBuffer));
            } else {
                reject(new Error("Could not read file data"));
            }
        };

        reader.onerror = (err) => {
            reject(err);
        };

        reader.readAsArrayBuffer(file);
    });
}
