import {useState} from 'react';
import ProjectSideBar from './components/ProjectSideBar';
import NoProjectSelect  from './components/NoProjectSelect';
import NewProject from './components/NewProject';
import './App.css';

function App() {
  const [isSelectProject,setIsSelectProject] = useState({
    selectId : undefined ,
    project : {}
  });

  const handleSelectProject = () => {
    setIsSelectProject((oldState) => {
      return{
        ...oldState,
        selectId:null,
        project: {},
      }
    });
  }

  const handleCancel = () => {
    setIsSelectProject((oldState) => {
      return{
        ...oldState,
        selectId:undefined,
        project: {},
      }
    });
  }

console.log(isSelectProject);
  let constext;

  if(isSelectProject.selectId === undefined){
    constext =  <NoProjectSelect onHandel={handleSelectProject}/>
  }else if(isSelectProject.selectId === null){
    constext = <NewProject onCancel={handleCancel} /> 
  };
  return (
   <main className="h-screen my-8 flex gap-8">
    <ProjectSideBar onHandel={handleSelectProject} />
    {constext}
   </main>
  );
}

export default App;
