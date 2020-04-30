<template>
<q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Buku</span>
      </span>
      <div class="q-pa-md">
        <q-form
          class="q-gutter-md"
        >
        <q-input
            label="Kode Gas"
            lazy-rules
            color="teal"
            v-model="kodeGas"
            :rules="[
           val => val !== null && val !== '' || 'Tuliskan kode buku yang inging ditambahkan'
           ]">
            <template v-slot:append>
              <q-icon name="description"/>
            </template>
          </q-input>

          <q-input
            label="Tipe Gas"
            lazy-rules
            color="teal"
            v-model="tipeGas"
            :rules="[
           val => val !== null && val !== '' || 'Tuliskan judul buku yang ingin ditambahkan'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>

           <q-input
            label="Ketersedian Gas"
            lazy-rules
            color="teal"
            v-model="stockGas"
            :rules="[
           val => val !== null && val !== '' || 'Tuliskan judul buku yang ingin ditambahkan'
           ]">
            <template v-slot:append>
              <q-icon name="exposure"/>
            </template>
          </q-input>

           <q-input
            label="Harga Gas"
            lazy-rules
            color="teal"
            v-model="harga"
            :rules="[
           val => val !== null && val !== '' || 'Tuliskan judul buku yang ingin ditambahkan'
           ]">
            <template v-slot:append>
              <q-icon name="money"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="add"
              label="Tambah Data Gas"
              style="height: 50px"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      kodeGas: null,
      tipeGas: null,
      stockGas: null,
      harga: null
    }
  }
}

</script>
