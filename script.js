 function validateForm(){
      let nom = document.getElementById("nom").value;
      let tel = document.getElementById("telephone").value;

      if(nom=="" || tel==""){
        showErrorAlert("Veuillez remplir tous les champs obligatoires.");
        return false;
      }
      if(isNaN(tel)){
        showErrorAlert("le numéro de téléphone doit contenir uniquement des chiffres.");
        return false;
      }
      return true;
    }