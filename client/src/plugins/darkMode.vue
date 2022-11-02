<script setup>


window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
  const colorScheme = e.matches ? "dark" : "light";

  if (colorScheme === "dark") {
    console.log("dark");
  } else {
    console.log("light")
  }
});


</script>

