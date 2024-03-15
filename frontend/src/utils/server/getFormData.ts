import formidable from 'formidable';
import { NextApiRequest } from 'next';

const form = formidable({
  multiples: true,
});

export async function getFormData(req: NextApiRequest) {
  const formData = await new Promise<{
    formFields: formidable.Fields;
    formFiles: formidable.Files;
  }>((resolve, reject) => {
    form.parse(req, (err, formFields, formFiles) => {
      if (err) {
        reject(err);

        return;
      }

      resolve({ formFields, formFiles });
    });
  });

  return formData;
}
