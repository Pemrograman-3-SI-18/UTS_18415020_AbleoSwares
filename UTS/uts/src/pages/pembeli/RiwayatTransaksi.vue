<template>
<q-page>
    <div class="q-pa-md">
        <div class="row">
            <div class="col-md-4 col-xs-12 q-pa-md">
                <q-card flat class="bg-white text-blue-grey-14">
                     <q-card-section class="center">
                          <span class="text-h5 text-weight-light q-pa-md">
                          <span class="text-blue-grey-14 text-bold">Riwayat Transaksi</span>
                          </span>
                    </q-card-section>
                    <q-card-section>
                        <div class="text-h6 text-center ">
                        PEMBELIAN SUKSES
                        </div>
                        <q-img spinner-color="white" style="height:100; max-width: 100%" placeholder-src="statics/gambar gas 3kg.jpg" src="statics/gambar gas 3kg.jpg" />
                    </q-card-section>
                    <q-card-section>
                        <div class="text-bold">
                          Kode Transaksi: C001
                        </div>
                        <div class="text-bold">
                          Kode Gas: K001
                        </div>
                        <div class="text-bold">
                          Jenis Gas:  Tabung Gas LPG 3kg
                        </div>
                        <div class="text-bold">
                            Jumlah Pembelian: 1
                        </div>
                        <div class="text-bold">
                            Harga: Rp. 22.000
                        </div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</q-page>
</template>

<script>
export default {
  name: 'DataBuku'
}

</script>

<style scoped>

</style>
