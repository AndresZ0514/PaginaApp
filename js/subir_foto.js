$(function(){
    $('#imagen_perfil').on('change', function () {
        var imagen = $(this)[0].files[0];
        var fileReader = new FileReader();
        fileReader.readAsDataURL(imagen);
        fileReader.onload = function(){
            $('#profile_pic').append('<img id="imagendeperfil" src="' + fileReader.result + '" width="300px" height="225px">');
        }
    });
});