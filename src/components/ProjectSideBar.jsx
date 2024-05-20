import Button from './Button';

const ProjectSideBar = ({onHandel}) => {
 return(
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">ADD Project</h1>
        <Button onClick={onHandel} > +Add Project </Button>
    </aside>
 );
};

export default ProjectSideBar;