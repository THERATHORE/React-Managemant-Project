import {useRef} from 'react';
import Input from './Input';
import Button from './Button';
const NewProject = ({onCancel}) => {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const handleSaveDate = () => {
        const enterTitle = title.current.value;
        const enterDescription = description.current.value;
        const enterDueDate = dueDate.current.value;
    };


   return(
   <div className='w-[35rem]'>
        <menu className='flex items-center justify-end gap-4 my-4'>
                <li>
                    <Button className="text-stone-800   hover:text-stone-950 " onClick={onCancel}>Cancel</Button>
                    </li>
                <li>
                    <Button className= 'px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950' onClick={handleSaveDate}>Save</Button>
                </li>
        </menu>
        <div>
            <Input label="Title"  ref={title} />
            <Input label="Description" textarea="true" ref={description}/>
            <Input label="Due Date" ref={dueDate} />
        </div>
    </div>
   );
};

export default NewProject;