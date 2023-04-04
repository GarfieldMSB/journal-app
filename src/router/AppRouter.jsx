import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

import { CheckingAuth } from "../ui";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { useCheckAuth } from "../hooks";


export const AppRouter = () => {

  // const {status} = useSelector(state => state.auth);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   onAuthStateChanged(FirebaseAuth, async(user) => {
  //     if (!user) return dispatch(logout());
  //     const {uid, email, displayName, photoURL} = user;
  //     dispatch(login({uid, email, displayName, photoURL}));
  //   })
  // }, []);


  const status = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth />  
  }

  return (
    <Routes>
        {/* Login y Registro */}

        {
          (status === 'authenticated')
          ? <Route path='/*' element={ <JournalRoutes /> }/>
          : <Route path='/auth/*' element={ <AuthRoutes />}/>
        }

        <Route path="/*" element={ <Navigate to='/auth/login' /> } />

        {/* Login y Registro */}
        {/* <Route path='/auth/*' element={ <AuthRoutes />}/> */}

        {/* JournalApp */}
        {/* <Route path='/*' element={ <JournalRoutes /> }/> */}
    </Routes>
  )
}
