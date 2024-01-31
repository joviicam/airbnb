import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/HelloWorld.vue'),
        children: [{
                path: '/catalogoEspacios',
                name: 'catalogoEspacios',
                component: () => import('../views/CatalogoEspacios.vue')
            },
            {
                path: '/consultarEspacio',
                name: 'consultarEspacio',
                component: () => import('../views/ConsultarEspacio.vue')
            },
            {
                path: '/registroEspacio',
                name: 'registroEspacio',
                component: () => import('../views/RegistrarEspacio.vue')
            },
            {
                path: '/showPerfil',
                name: 'showPerfil',
                component: () => import('../views/PerfilUsuario.vue')
            },
            {
                path: '/registroUsuario',
                name: 'registroUsuario',
                component: () => import('../views/RegistrarPersona.vue')
            }
            
        ]
    }
]

const router = new VueRouter({routes })
export default router;
