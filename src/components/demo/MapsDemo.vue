<script setup lang="ts">
import { MapboxMap } from '@arvin/maps'
// <MapboxMap class="rounded-lg" />
</script>

<template>
  <div class="relative my-4 flex flex-col space-y-2">
    <Tabs default-value="Mapbox" class="relative mr-auto w-full">
      <div class="flex items-center justify-between pb-3">
        <TabsList class="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="Mapbox"
            class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Mapbox
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="Mapbox" class="relative rounded-md border overflow-hidden">
        <MapboxMap class=" !h-[400px]" />
      </TabsContent>
      <TabsContent value="code">
        <slot name="code" />
      </TabsContent>
    </Tabs>
  </div>
</template>

<style scoped>

</style>
