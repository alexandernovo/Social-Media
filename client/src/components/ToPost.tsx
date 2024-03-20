import React, { useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import ImageComponent from './ImageComponent';
interface ToPostProps {
    Class?: string;
}

const ToPost: React.FC<ToPostProps> = (props: ToPostProps) => {
    const firstname: string = useSelector((state: RootState) => state.userState.firstname);
    const [text, setText] = useState('');
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
        adjustTextareaHeight(event.target);
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFiles(event.target.files);
        }
    };

    const adjustTextareaHeight = (textarea: HTMLTextAreaElement) => {
        if (textarea.value != "") {
            if (textarea.scrollHeight > window.innerHeight * 0.07) {
                textarea.style.height = 'auto';
                textarea.style.height = `${textarea.scrollHeight}px`;
                textarea.className += 'overflow-auto';
            } else {
                textarea.style.height = '7vh'; // Set a fixed height when content is less than or equal to 
                textarea.className += 'overflow-hidden';
            }
        }
        else {
            textarea.className += 'overflow-hidden';
            textarea.style.height = '7vh'; // Set a fixed height when content is less than or equal to 8vh
        }
    };


    const classes: string = `${props.Class} card w-100 bg-base-100 shadow-m rounded-[8px]`;

    return (
        <div className={classes}>
            <div className="card-body p-5">
                <div className='flex'>
                    <div className='w-[45px] h-[45px] overflow-hidden border border-gray-300 rounded-full me-3'></div>
                    <div className='flex-1 flex flex-col'>
                        <div className='w-full pe-5'>
                            <textarea
                                className="h-[7vh] border-0 pt-3 border-b rounded-none active:border-0 text-[14px] focus:outline-none focus:shadow-0 border-gray-300 flex-1 flex-1 w-full ps-3 pe-[3%] max-h-[150px]"
                                rows={1}
                                placeholder={`What's on your mind, ${firstname}?`}
                                value={text}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        {selectedFiles != null && (
                            <ImageComponent Images={selectedFiles} Class='max-h-[60vh] me-5 mt-2 mb-2' />
                        )}

                        <div className='flex items-center justify-between me-5'>
                            <label htmlFor='imagepost' className='flex items-center gap-1 border p-1 px-2 shadow-sm cursor-pointer rounded-lg'>
                                <img height="24" width="24" alt="" className="w-5 h-5" src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeGPgcXY41Js6cx1Ro3HNUWMPL4YoeGsw5I8vhih4azDkj9pQapHs8e8CWdNWuEkmgbat8dx0uLN9NaFyQAUgO8n" />
                                <p className='font-semibold text-gray-500 text-[13px]'>Photo | Images</p>
                            </label>
                            <input type='file' id='imagepost' className='hidden' multiple onChange={handleFileChange} />
                            <div>
                                <button className="btn btn-primary btn-sm text-white flex">
                                    Post
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToPost;
