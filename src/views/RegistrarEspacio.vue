<template lang="">
    <div>
        REGISTRAR PERSONA
        <b-form>
            <b-form-group label="Nombre de la persona" label-for="nombrePersona">
                <b-form-input id="nombrePersona" v-model="nombrePersona" required></b-form-input>
            </b-form-group>
            <b-form-group label="Apellido paterno" label-for="apellidoPaterno">
                <b-form-input id="apellidoPaterno" v-model="apellidoPaterno" required></b-form-input>
            </b-form-group>
            <b-form-group label="Apellido materno" label-for="apellidoMaterno">
                <b-form-input id="apellidoMaterno" v-model="apellidoMaterno" required></b-form-input>
            </b-form-group>
            <b-form-group label="Fecha de nacimiento" label-for="fechaNacimiento">
                <b-form-input id="fechaNacimiento" v-model="fechaNacimiento" required></b-form-input>
            </b-form-group>
            <b-form-group label="Correo electrónico" label-for="correoElectronico">
                <b-form-input id="correoElectronico" v-model="correoElectronico" required></b-form-input>
            </b-form-group>
            <b-form-group label="Direccion" label-for="address">
                <b-form-input id="address" v-model="address" required></b-form-input>
            </b-form-group>
       
            <b-button type="submit" variant="primary">Registrar</b-button>
        </b-form>
    </div>
</template>
<script>
    import personaService from "../services/Persona"; // Ajusta la ruta según tu estructura de archivos
    export default {
        data() {
            return {
                nombrePersona: '',
                apellidoPaterno: '',
                apellidoMaterno: '',
                fechaNacimiento: '',
                correoElectronico: '',
                address: ''
            }
        },
        methods: {
            async registrarPersona() {
                try {
                    const data = await personaService.registrarPersona({
                        nombre: this.nombrePersona,
                        apellidoPaterno: this.apellidoPaterno,
                        apellidoMaterno: this.apellidoMaterno,
                        fechaNacimiento: this.fechaNacimiento,
                        correoElectronico: this.correoElectronico
                    });
                    console.log(data);
                } catch (error) {
                    console.error(error);
                }
            }
        },

    }
</script>
<style lang="">

</style>