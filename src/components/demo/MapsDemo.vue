<script setup lang="ts">
import { MapboxMap, OpenLayersMap } from "@arvin/maps";
</script>

<template>
  <div class="relative my-4 flex flex-col space-y-2">
    <Tabs default-value="Mapbox" class="relative mr-auto w-full">
      <div class="flex items-center justify-between pb-3">
        <TabsList
          class="w-full justify-start rounded-none border-b bg-transparent p-0"
        >
          <TabsTrigger
            value="Mapbox"
            class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Mapbox
          </TabsTrigger>
          <TabsTrigger
            value="OpenLayers"
            class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            OpenLayers
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent
        value="Mapbox"
        class="relative overflow-hidden rounded-md border"
      >
        <MapboxMap class="!h-[400px]" />
      </TabsContent>
      <TabsContent
        value="OpenLayers"
        class="relative overflow-hidden rounded-md border"
      >
        <OpenLayersMap class="!h-[400px]" />
      </TabsContent>
    </Tabs>
  </div>
</template>

<style scoped></style>
