import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export default function SimpleBackdrop() {

  const loadingState = useSelector((state:RootState) => state.loading.loading)

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loadingState}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
