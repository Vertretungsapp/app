<script>
  import LoginAndSettingsIcon from "./LoginAndSettingsIcon.svelte";
  import { faKey } from "@fortawesome/free-solid-svg-icons/faKey";
  import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
</script>

<div class="flex items-center justify-end gap-2">
  <LoginAndSettingsIcon icon={faKey}></LoginAndSettingsIcon>
  <LoginAndSettingsIcon icon={faGear}></LoginAndSettingsIcon>
</div>