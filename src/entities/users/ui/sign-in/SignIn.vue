<template>
  <form class="form sign-in" @submit.prevent="submit">
    <div class="form__item">
      <div class="form__label">Email</div>
      <input type="text" class="form__input" name="email">
    </div>

    <div class="form__item">
      <div class="form__label">Password</div>
      <input type="password" class="form__input" name="password">
    </div>

    <button>Войти</button>
  </form>
</template>

<script lang="ts" setup>
import {signIn, UserSignInDto} from "~/entities/users";
import { useNuxtApp } from "#app";

const submit = async (e) => {
  const data = Object.fromEntries(new FormData(e.target).entries()) as UserSignInDto

  try {
    const { data: result } = await signIn(data)
    // eslint-disable-next-line no-console
    console.log(result)
  } catch (e) {
    throw new Error('biba')
  }
}
</script>

<style src="./SignIn.scss" lang="scss"/>
