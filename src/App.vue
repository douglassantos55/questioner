<template>
    <nav class="mb-5 navbar navbar-expand-sm navbar-dark bg-dark">
      <span class="navbar-brand">Questioner</span>

        <ul class="navbar-nav ml-auto">
          <router-link to="/" v-slot="{ href, isActive, navigate }">
              <li class="nav-item" :class="{active: isActive}">
                <a :href="href" @click="navigate" class="nav-link">Topics</a>
              </li>
          </router-link>

          <router-link to="/stats" v-slot="{ href, isActive, navigate }">
              <li class="nav-item" :class="{active: isActive}">
                <a :href="href" @click="navigate" class="nav-link">Statistics</a>
              </li>
          </router-link>
        </ul>
    </nav>

    <div class="container-md">
        <router-view/>
    </div>
</template>
