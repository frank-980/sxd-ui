import sxdInput from '../components/Input'
import sxdInputpro from '../components/Inputpro'
import sxdIcon from '../components/Icon'
import sxdTable from '../components/Table'
import sxdButton from '../components/Button'
import Usage from '../components/Usage'
import Install from '../components/Install'
import select from '../components/Select'
import message from '../components/Message'
export default [
    /* usage */
    {
        path: '/component/install',
        name: 'Install',
        component: Install,
        meta: {
            title: '组件|SHN-UI'
        }
    },
    {
        path: '/component/usage',
        name: 'Usage',
        component: Usage,
        meta: {
            title: '组件|SHN-UI'
        }
    },
    /* zujian */
    {
        path: '/component/input',
        name: 'sxdInput',
        component: sxdInput,
        meta: {
            title: '组件|SHN-UI'
        }
    },
    
    {
        path: '/component/icon',
        name: 'sxdIcon',
        component: sxdIcon,
        meta: {
            title: '组件|SHN-UI'
        }
    },
    {
        path: '/component/table',
        name: 'sxdTable',
        component: sxdTable,
        meta: {
            title: '组件|SHN-UI'
        }
    },
    {
        path: '/component/button',
        name: 'sxdButton',
        component: sxdButton,
        meta: {
            title: '组件|SHN-UI'
        }
    },
    {
        path: '/component/Select',
        name: 'select',
        component: select,
        meta: {
            title: '组件|SHN-UI'
        }
    },
    {
        path: '/component/inputpro',
        name: 'sxdInputpro',
        component: sxdInputpro,
        meta: {
            title: '组件|SHN-UI'
        }
    },
    {
        path: '/component/message',
        name: 'message',
        component: message,
        meta: {
            title: '组件|SHN-UI'
        }
    },
]