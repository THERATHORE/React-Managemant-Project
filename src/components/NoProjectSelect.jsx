import LogProject from '../assets/logo.png'
import Button from './Button'
const NoProjectSelect = ({onHandel}) => {
    return(
        <div className="mt-24 text-center w-2/3 ">
            <img src={LogProject} alt="An empty task list" className="w-16 h-16 object-contain mx-auto"/>
            <h2 className="text-xl fonst-bold text-stone-500 my-4">No Project select yet!</h2>
            <p className="text-stone-400 mb-4">Select New project Click Below Button </p>
            <p className="mt-8">
                <Button onClick={onHandel}>Select Project</Button>
            </p>
        </div>
    );
};

export default NoProjectSelect;