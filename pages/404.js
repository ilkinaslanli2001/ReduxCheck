import MainLayout from "./components/MainLayout";
import classes from  '../styles/error.module.css'
export default function ErrorPage()
{
    return(<MainLayout>
        
        <h1 className={classes.errortext}>Error 404</h1>
       
    </MainLayout>)
}