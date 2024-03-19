import React from 'react';

interface ImageComponentProps {
    Class?: string;
    Images?: FileList;
}

const ImageComponent: React.FC<ImageComponentProps> = (props: ImageComponentProps) => {
    const classes: string = `${props.Class} w-100 bg-gray-100 p-2 rounded-lg`;

    return (
        <div className={classes}>
            {props.Images && props.Images.length > 0 ? (
                <>
                    {props.Images.length == 1 ? (
                        <img src={URL.createObjectURL(props.Images[0])} alt="Uploaded Image" className='h-full w-full object-cover' />
                    ) : (
                        <>
                            <div className="flex items-center h-[100%]">
                                <>
                                    {props.Images?.length == 2 ? (
                                        <div className='flex items-center gap-2'>
                                            <div className="w-[50%] h-full">
                                                <img src={URL.createObjectURL(props.Images[0])} alt={`Uploaded`} className="w-full h-[100%] object-cover" />
                                            </div>
                                            <div className="w-[50%] h-full">
                                                <img src={URL.createObjectURL(props.Images[1])} alt={`Uploaded`} className="w-full h-[100%] object-cover" />
                                            </div>
                                        </div>
                                    ) :
                                        (
                                            <div className='flex items-center gap-2'>
                                                <div className="w-[60%] h-full">
                                                    <img src={URL.createObjectURL(props.Images[0])} alt={`Uploaded`} className="w-full h-[100%] object-cover" />
                                                </div>
                                                <div className='flex items-center gap-1 w-[40%] flex-col'>
                                                    <div className='h-[50%]'>
                                                        <img src={URL.createObjectURL(props.Images[1])} alt={`Uploaded`} className="w-full h-[100%] object-cover" />
                                                    </div>
                                                    <div className='h-[50%]'>
                                                        <img src={URL.createObjectURL(props.Images[2])} alt={`Uploaded`} className="w-full h-[100%] object-cover" />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </>
                            </div>
                        </>
                    )}
                </>
            ) : (
                <p>Upload an Image</p>
            )}
        </div>
    );
};

export default ImageComponent;
