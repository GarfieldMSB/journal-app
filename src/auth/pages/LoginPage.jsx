import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"

import { useForm } from '../../hooks'
import { AuthLayout } from '../layout/AuthLayout'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'

const formData = {
  email: '',
  password: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo es obligatorio'],
  password: [(value) => value.length >= 1, 'El password es obligatorio'],
}

export const LoginPage = () => {

  const [formSubmited, setFormSubmited] = useState(false);

  const { status, errorMessage } = useSelector(state => state.auth);
  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const dispatch = useDispatch();

  const { email, password, onInputChange, formState,
    isFormValid, emailValid, passwordValid } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmited(true);

    if (!isFormValid) return;
    //! No es esta la accion a despachar
    dispatch(startLoginWithEmailPassword(formState));
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }


  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder="correo@google.com"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Contrasena'
              type='password'
              placeholder="Contrasena"
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                type='submit'
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                onClick={onGoogleSignIn}
                variant="contained"
                fullWidth
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>

          </Grid>

          <Grid
            item
            xs={12}
            sx={{ mt: 1 }}
            display={!!errorMessage ? '' : 'none'}
          >
            <Alert severity='error'>{errorMessage}</Alert>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear una cuenta
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
