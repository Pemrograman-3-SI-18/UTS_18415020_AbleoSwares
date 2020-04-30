
const routes = [
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/admin/home/DataGas.vue') },
      { path: 'inputdatagas', component: () => import('pages/admin/home/InputDataGas.vue') },
      { path: 'datatransaksi', component: () => import('pages/admin/transaksi/DataTransaksi.vue') },
      { path: 'datapengiriman', component: () => import('pages/admin/pengiriman/DataPengiriman.vue') }
    ]
  },
  {
    path: '/pembeli',
    component: () => import('layouts/PembeliLayout.vue'),
    children: [
      { path: '', component: () => import('pages/pembeli/DataGas.vue') },
      { path: 'transaksi', component: () => import('pages/pembeli/DataTransaksi.vue') },
      { path: 'riwayat', component: () => import('pages/pembeli/RiwayatTransaksi.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/users/Login.vue') },
      { path: 'registrasi', component: () => import('pages/users/Registrasi.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
