// export async function submitToGoogleScript(data) {
//   const scriptURL =
//     "https://script.google.com/macros/u/4/s/AKfycbxXdI5lr3VpLruMsF0e5Hc2zgW0Qc60XSk_7kydlE6zAgTd-EcltZ3UX5ugbFiTPj8/exec";
//   const body = new URLSearchParams();

//   let file = null;

//   // Iterate through all keys in the data object
//   for (const key in data) {
//     if (data[key] instanceof File) {
//       file = data[key]; // store the file to process separately
//     } else {
//       body.append(key, data[key]);
//     }
//   }

//   if (file) {
//     const reader = new FileReader();

//     return new Promise((resolve, reject) => {
//       reader.onload = async () => {
//         const base64File = reader.result.split(",")[1];
//         body.append("file", base64File);
//         body.append("fileName", file.name);
//         body.append("mimeType", file.type);

//         try {
//           const res = await fetch(scriptURL, {
//             method: "POST",
//             body: body,
//           });
//           const text = await res.text();
//           resolve(text);
//         } catch (error) {
//           reject(error);
//         }
//       };

//       reader.onerror = () => reject(reader.error);
//       reader.readAsDataURL(file);
//     });
//   } else {
//     try {
//       const res = await fetch(scriptURL, {
//         method: "POST",
//         body: body,
//       });
//       const text = await res.text();
//       return text;
//     } catch (error) {
//       throw error;
//     }
//   }
// }
