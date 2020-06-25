export const toBase64 = (file: File): Promise<string | ArrayBuffer | null> => new Promise((resolve, reject) => {
  const reader = new FileReader();

  reader.onload = (): void => resolve(reader.result);
  reader.onerror = (error): void => reject(error);

  reader.readAsDataURL(file);
});
