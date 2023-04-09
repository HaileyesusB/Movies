export function toBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
     
    });
  }

  /* 
     if (reader.readyState === FileReader.DONE) {
          resolve(reader.result);
        } else {
          reject('Error: File not ready for read!');
        }
      };
      reader.onerror = (error) => reject(error); 
  
  */