

export const fileUpload = async( file ) => {

    if (!file) throw new Error('No hay ningun archivo a subir');

    const cloudURL = 'https://api.cloudinary.com/v1_1/dy07dluad/upload';

    const formData = new FormData();

    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch( cloudURL, {
            method: 'POST',
            body: formData
        });

        console.log(resp);
        if(!resp.ok) throw new Error('No se pudo subir imagen');
        const {url} = await resp.json();

        return url;


    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }

}