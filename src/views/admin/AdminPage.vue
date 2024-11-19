<script setup lang="ts">
  import { getUserData } from "@/helper/getUserData";
  import { RouterLink, RouterView } from "vue-router";
import { logoutUserHttp } from "./actions/LogoutUser";
import { successMsg } from "@/helper/Toastnotification";
import { onMounted } from "vue";
import { userIsLoggedInHttp } from "./actions/UserIsLoggedIn";

  const userData = getUserData()

  async function logoutUser(){
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    const userId = userData?.user?.id!
    if (typeof userId! !== 'undefined') {
      const data = await logoutUserHttp(userId)
      localStorage.clear()
      successMsg(data.message)
      setTimeout(() => {
        window.location.href="/"
      }, 2000)

    }

  }

  async function userIsLoggedIn(){
    try {
      await userIsLoggedInHttp()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      //console.log(error)
      //if (error instanceof Error) {
        console.log(error)
        if (error.message == 'Unauthenticated.') {
          window.location.href="/"
        }
      //}
    }
  }

  onMounted(async() =>{
    await userIsLoggedIn()
  })
</script>
<template>
    <div class="container">
        <div>
            <span>Name : {{ userData?.user?.prenom }}</span>
            <br />
            <span>
                Email : <a href="">{{ userData?.user?.email }}</a>
            </span><br />
            <span style="color: red; cursor: pointer;" @click="logoutUser"><b>Se deconnecter</b></span>
        </div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #e3f2fd">
            <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <RouterLink class="nav-link" aria-current="page" to="/admin">Dashbaord</RouterLink>
                </li>
                <li class="nav-item" style="font-weight: bold">
                    <RouterLink class="nav-link" to="/create-classe">Creer une classe</RouterLink>
                </li>
                <li class="nav-item" style="font-weight: bold">
                    <RouterLink class="nav-link" to="/classes-list">Liste des classes</RouterLink>
                </li>
                <li class="nav-item" style="font-weight: bold">
                    <RouterLink class="nav-link" to="/create-matiere">Creer ne matiere</RouterLink>
                </li>
                <li class="nav-item" style="font-weight: bold">
                    <RouterLink class="nav-link" to="/matieres-list">Liste des matieres</RouterLink>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        <br />
        <br />

        <div class="row">
            <RouterView />
        </div>
    </div>
  </template>
