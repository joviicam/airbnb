<template lang="">
    <div>
        REGISTRAR ESPACIO
        <b-form>
            <b-form-group label="Nombre del espacio" label-for="nombreEspacio">
                <b-form-input id="nombreEspacio" v-model="nombreEspacio" required></b-form-input>
            </b-form-group>
            <b-form-group label="Descripción" label-for="descripcion">
                <b-form-textarea id="descripcion" v-model="descripcion" required></b-form-textarea>
            </b-form-group>
            <b-form-group label="Capacidad" label-for="capacidad">
                <b-form-input id="capacidad" v-model="capacidad" required></b-form-input>
            </b-form-group>
            <b-form-group label="Ubicación" label-for="ubicacion">
                <b-form-input id="ubicacion" v-model="ubicacion" required></b-form-input>
            </b-form-group>
            <b-form-group label="Tipo de espacio" label-for="tipoEspacio">
                <b-form-select id="tipoEspacio" v-model="tipoEspacio" :options="options" required></b-form-select>
<!--                 <b-form-select-option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</b-form-select-option>
 -->        </b-form-group>
            <b-form-group label="Imagen" label-for="imagen">
                <b-form-file id="imagen" v-model="imagen" required></b-form-file>
            </b-form-group>
            <b-button type="submit" variant="primary">Registrar</b-button>
        </b-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nombreEspacio: '',
            descripcion: '',
            capacidad: '',
            ubicacion: '',
            tipoEspacio: null,
            options: [
                { value: null, text: 'Seleccione una opción' },
                { value: '1', text: 'Salón' },
                { value: '2', text: 'Auditorio' },
                { value: '3', text: 'Laboratorio' },
                { value: '4', text: 'Cancha' },
                { value: '5', text: 'Área verde' }
            ],
            imagen: null
        }
    }
    
}
</script>
<style lang="">
    
</style>