<template>
    <div class="container-fluid mt-4">

        <!-- Black Row superior -->
        <div class="row" style="background-color:black;">

          <!-- Midia Footer  -->
          <div class="col-4">
            <!-- Titulo Midia Footer -->
            <div class="row d-flex align-items-center justify-content-center pt-4">
              <span class="text-white h6">Siga-nos</span><br>
            </div>

            <!-- Midia Footer -->
            <div class="row d-flex align-items-center justify-content-center">
                <span id="midiaFooter" class="d-flex"></span>
            </div>
          </div>

          <!-- IMG Solo Leveling -->
          <div class="col-4 pb-5 mb-5">
            <div class="d-flex justify-content-center">
              <img src="@/assets/solo-leveling1.png" class="position-absolute"  style="width:8rem;" >
            </div>
          </div>

          <!-- Arrow-UP, Menu Footer -->
          <div class="col-4">
            <!-- Arrow-UP Archor -->
            <div class="d-flex align-items-start justify-content-end">
              <a class="fa fa-3x fa-inverse fa-arrow-circle-up" style="text-decoration:none;transition:0.5s" href="#navAnchor"></a>
            </div>
            <!-- Menu Footer -->
            <div class="d-flex align-items-center justify-content-center">
                <slot></slot>
            </div>
          </div>

        </div>
        <!-- Termino Black Row -->

        <!-- Newslatter, imagem e copyright -->
        <div class="row pt-4 pb-4" style="background-color:#001829;">

          <!-- Newslatter -->
          <div class="col-4">
            <div class="d-flex align-items-center justify-content-center">
              <span class="text-white" style="font-weight:bold" >ASSINE NOSSA NEWSLATTER</span>
            </div>
            <div class="d-flex align-items-center justify-content-center">
              <input type="text" class="form-control col-md-6 bg-dark" placeholder="coloque seu e-mail" style="border:none"> <input type="button" class="btn btn-primary ml-2" value="Assine">
            </div>
          </div>

          <!-- Div central que contem o espaçamento da imagem -->
          <div class="col-4"></div>

          <!-- Copyright -->
          <div class="col-4 d-flex align-items-end justify-content-center">
              <span class="text-white" id="footerCopyright">© {{date}} anime Data.</span>
          </div>

        </div>
        <!-- Término Newslatter -->

      </div>
      <!-- Término Footer -->

</template>

<script>
export default {
    data(){
        return{
            date:new Date().getFullYear(),
        }
    }
}
</script>

<style>
    .footer{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>