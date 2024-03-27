import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'
import { PublicRoute } from './PublicRoute';

interface PublicRouteProps{
    children: React.ReactElement;
}

export const PublicRoute: FC<PublicRouteProps> = ({children}) => {

const {user} = useAuth()
  if (user) {
    return <Navigate to='/' replace={true}/>
  }

  return children;
}
