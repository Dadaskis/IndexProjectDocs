function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function getElementPath(element) {
    const path = [];
    let current = element;

    while (current && current !== document.body) {
        let selector = current.tagName.toLowerCase();

        if (current.id) {
            selector += `#${current.id}`;
        } else if (current.className && typeof current.className === 'string') {
            selector += `.${current.className.split(' ').join('.')}`;
        }

        if(current.parentNode) {
            selector += [...current.parentElement.children].indexOf(element);
        }

        path.unshift(selector);
        current = current.parentNode;
    }

    return path.join(' > ');
}

function maximizeImage(img) {
    const overlay = document.getElementById('imageOverlay');
    const maximizedImg = document.getElementById('maximizedImage');

    maximizedImg.src = img.src;
    maximizedImg.alt = img.alt;
    overlay.style.display = 'block';
}

function minimizeImage() {
    document.getElementById('imageOverlay').style.display = 'none';
}

function toggleModule(element) {
    const classesContainer = element.parentElement.nextElementSibling;

    if (classesContainer.style.display === 'flex') {
        classesContainer.style.display = 'none';
    } else {
        classesContainer.style.display = 'flex';
    }

    setCookie(getElementPath(classesContainer), classesContainer.style.display, 1);
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.sidebar-content').innerHTML = `
        <p>Guides</p><a class="sidebar-class module-var" href="../../assets/guides/General.html">General</a>
<p>Modules</p><a class="sidebar-class module-var" href="../../modules/achievements/docs/index.html">achievements<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/achievements/docs/scripts/achievements.html">Achievements</a>
<a class="sidebar-class class-node" href="../../modules/achievements/docs/scripts/achievement_unlocked_display.html">AchievementUnlockedDisplay</a>
<a class="sidebar-class class-resource" href="../../modules/achievements/docs/scripts/achievement_data.html">AchievementData</a>
</div><a class="sidebar-class module-var" href="../../modules/bbcode_effects/docs/index.html">bbcode_effects<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class" href="../../modules/bbcode_effects/docs/scripts/bbcode_matrix.html">RichTextMatrix</a>
<a class="sidebar-class" href="../../modules/bbcode_effects/docs/scripts/bbcode_randhex.html">RichTextRandHEX</a>
</div><a class="sidebar-class module-var" href="../../modules/bullet_system/docs/index.html">bullet_system<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/bullet_system/docs/scripts/trail.html">trail</a>
<a class="sidebar-class class-resource" href="../../modules/bullet_system/docs/scripts/bullet_data.html">BulletData</a>
<a class="sidebar-class" href="../../modules/bullet_system/docs/scripts/bullet_system.html">BulletSystem</a>
<a class="sidebar-class" href="../../modules/bullet_system/docs/scripts/raycast_bullet_system.html">RaycastBulletSystem</a>
</div><a class="sidebar-class module-var" href="../../modules/characters/docs/index.html">characters<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/characters/docs/scripts/character_list.html">CharacterList</a>
<a class="sidebar-class class-node" href="../../modules/characters/docs/scripts/factions.html">Factions</a>
<a class="sidebar-class class-node" href="../../modules/characters/docs/scripts/particle_remover.html">particle_remover</a>
<a class="sidebar-class class-resource" href="../../modules/characters/docs/scripts/factions_init_data.html">FactionsInitData</a>
<a class="sidebar-class" href="../../modules/characters/docs/scripts/character.html">Character</a>
<a class="sidebar-class" href="../../modules/characters/docs/scripts/character_damagable.html">CharacterDamagable</a>
</div><a class="sidebar-class module-var" href="../../modules/characters_special_ability/docs/index.html">characters_special_ability<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/characters_special_ability/docs/scripts/heal_support.html">heal_support</a>
<a class="sidebar-class" href="../../modules/characters_special_ability/docs/scripts/defense_field.html">defense_field</a>
<a class="sidebar-class" href="../../modules/characters_special_ability/docs/scripts/flashbang.html">flashbang</a>
<a class="sidebar-class" href="../../modules/characters_special_ability/docs/scripts/grenade_madness.html">grenade_madness</a>
<a class="sidebar-class" href="../../modules/characters_special_ability/docs/scripts/heal_support.html">heal_support</a>
<a class="sidebar-class" href="../../modules/characters_special_ability/docs/scripts/invinsibility.html">invinsibility</a>
<a class="sidebar-class" href="../../modules/characters_special_ability/docs/scripts/killbound.html">killbound</a>
<a class="sidebar-class" href="../../modules/characters_special_ability/docs/scripts/speed.html">speed</a>
<a class="sidebar-class" href="../../modules/characters_special_ability/docs/scripts/teleport.html">teleport</a>
<a class="sidebar-class" href="../../modules/characters_special_ability/docs/scripts/character_special_ability.html">CharacterSpecialAbility</a>
</div><a class="sidebar-class module-var" href="../../modules/character_builder/docs/index.html">character_builder<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/character_builder/docs/scripts/character_builder_utilities.html">CharacterBuilderUtilities</a>
<a class="sidebar-class class-node" href="../../modules/character_builder/docs/scripts/character.html">character</a>
<a class="sidebar-class class-node" href="../../modules/character_builder/docs/scripts/material_export.html">material_export</a>
<a class="sidebar-class class-node" href="../../modules/character_builder/docs/scripts/character_builder.html">character_builder</a>
<a class="sidebar-class class-node" href="../../modules/character_builder/docs/scripts/character_detail.html">CB_CharacterDetail</a>
<a class="sidebar-class class-node" href="../../modules/character_builder/docs/scripts/character_part.html">CB_CharacterPart</a>
<a class="sidebar-class class-node" href="../../modules/character_builder/docs/scripts/editor_UI.html">editor_UI</a>
<a class="sidebar-class class-node" href="../../modules/character_builder/docs/scripts/character_parts_list.html">character_parts_list</a>
<a class="sidebar-class class-node" href="../../modules/character_builder/docs/scripts/character_part_selector.html">character_part_selector</a>
<a class="sidebar-class class-node" href="../../modules/character_builder/docs/scripts/character_selector.html">character_selector</a>
<a class="sidebar-class class-node" href="../../modules/character_builder/docs/scripts/material_combiner.html">material_combiner</a>
<a class="sidebar-class class-node" href="../../modules/character_builder/docs/scripts/material_placement.html">material_placement</a>
<a class="sidebar-class class-node" href="../../modules/character_builder/docs/scripts/texture_field.html">texture_field</a>
<a class="sidebar-class class-node" href="../../modules/character_builder/docs/scripts/camera_control.html">camera_control</a>
<a class="sidebar-class class-node" href="../../modules/character_builder/docs/scripts/rotation_cam_control.html">rotation_cam_control</a>
<a class="sidebar-class class-node" href="../../modules/character_builder/docs/scripts/text_log.html">text_log</a>
<a class="sidebar-class class-resource" href="../../modules/character_builder/docs/scripts/material_export_data.html">CB_MaterialExportData</a>
<a class="sidebar-class class-resource" href="../../modules/character_builder/docs/scripts/saved_character.html">CB_SavedCharacter</a>
<a class="sidebar-class" href="../../modules/character_builder/docs/scripts/character_builder_hit_body.html">character_builder_hit_body</a>
</div><a class="sidebar-class module-var" href="../../modules/checkpoints/docs/index.html">checkpoints<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/checkpoints/docs/scripts/checkpoints.html">Checkpoints</a>
<a class="sidebar-class class-resource" href="../../modules/checkpoints/docs/scripts/checkpoint_data.html">CheckpointData</a>
</div><a class="sidebar-class module-var" href="../../modules/color_grading/docs/index.html">color_grading<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/color_grading/docs/scripts/color_grading.html">ColorGrading</a>
<a class="sidebar-class class-node" href="../../modules/color_grading/docs/scripts/effect_game.html">effect_game</a>
</div><a class="sidebar-class module-var" href="../../modules/comics_player/docs/index.html">comics_player<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/comics_player/docs/scripts/comics_player.html">ComicsPlayer</a>
<a class="sidebar-class class-node" href="../../modules/comics_player/docs/scripts/comics_text_layer.html">comics_text_layer</a>
<a class="sidebar-class class-node" href="../../modules/comics_player/docs/scripts/comics_editor.html">comics_editor</a>
<a class="sidebar-class class-node" href="../../modules/comics_player/docs/scripts/editor_comic_control.html">editor_comic_control</a>
<a class="sidebar-class class-node" href="../../modules/comics_player/docs/scripts/editor_relay.html">editor_relay</a>
<a class="sidebar-class class-node" href="../../modules/comics_player/docs/scripts/text_box_transform_button.html">text_box_transform_button</a>
<a class="sidebar-class class-node" href="../../modules/comics_player/docs/scripts/comics_player_test.html">comics_player_test</a>
<a class="sidebar-class class-resource" href="../../modules/comics_player/docs/scripts/comics_data.html">ComicsData</a>
<a class="sidebar-class class-resource" href="../../modules/comics_player/docs/scripts/comics_page_data.html">ComicsPageData</a>
<a class="sidebar-class class-resource" href="../../modules/comics_player/docs/scripts/comics_picture_data.html">ComicsPictureData</a>
<a class="sidebar-class class-resource" href="../../modules/comics_player/docs/scripts/comics_text_box_data.html">ComicsTextBoxData</a>
</div><a class="sidebar-class module-var" href="../../modules/comics_renderer/docs/index.html">comics_renderer<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/comics_renderer/docs/scripts/comics_renderer.html">comics_renderer</a>
<a class="sidebar-class class-node" href="../../modules/comics_renderer/docs/scripts/comics_renderer_control.html">ComicsRendererControl</a>
<a class="sidebar-class class-node" href="../../modules/comics_renderer/docs/scripts/camera_control.html">camera_control</a>
<a class="sidebar-class class-node" href="../../modules/comics_renderer/docs/scripts/shader_layers.html">shader_layers</a>
<a class="sidebar-class class-node" href="../../modules/comics_renderer/docs/scripts/text_log.html">text_log</a>
<a class="sidebar-class class-node" href="../../modules/comics_renderer/docs/scripts/bone.html">bone</a>
<a class="sidebar-class class-node" href="../../modules/comics_renderer/docs/scripts/character.html">character</a>
<a class="sidebar-class class-node" href="../../modules/comics_renderer/docs/scripts/IK_control.html">IK_control</a>
<a class="sidebar-class class-node" href="../../modules/comics_renderer/docs/scripts/loc_obj.html">loc_obj</a>
<a class="sidebar-class class-node" href="../../modules/comics_renderer/docs/scripts/point_light.html">point_light</a>
<a class="sidebar-class class-node" href="../../modules/comics_renderer/docs/scripts/prop.html">prop</a>
<a class="sidebar-class class-node" href="../../modules/comics_renderer/docs/scripts/render_camera.html">render_camera</a>
<a class="sidebar-class class-node" href="../../modules/comics_renderer/docs/scripts/spot_light.html">spot_light</a>
<a class="sidebar-class class-node" href="../../modules/comics_renderer/docs/scripts/comics_renderer_UI_main.html">comics_renderer_UI_main</a>
<a class="sidebar-class class-resource" href="../../modules/comics_renderer/docs/scripts/comic_scene_file.html">ComicSceneFile</a>
<a class="sidebar-class" href="../../modules/comics_renderer/docs/scripts/comics_renderer_hit_body.html">comics_renderer_hit_body</a>
</div><a class="sidebar-class module-var" href="../../modules/common_editor/docs/index.html">common_editor<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/common_editor/docs/scripts/editor_position.html">editor_position</a>
<a class="sidebar-class class-node" href="../../modules/common_editor/docs/scripts/editor_position_axis.html">editor_position_axis</a>
<a class="sidebar-class class-node" href="../../modules/common_editor/docs/scripts/editor_rotation.html">editor_rotation</a>
<a class="sidebar-class class-node" href="../../modules/common_editor/docs/scripts/editor_rotation_axis.html">editor_rotation_axis</a>
<a class="sidebar-class class-node" href="../../modules/common_editor/docs/scripts/material_property.html">material_property</a>
<a class="sidebar-class class-node" href="../../modules/common_editor/docs/scripts/properties.html">properties</a>
<a class="sidebar-class class-node" href="../../modules/common_editor/docs/scripts/vbox_fill_x.html">vbox_fill_x</a>
<a class="sidebar-class" href="../../modules/common_editor/docs/scripts/common_editor_hit_body.html">common_editor_hit_body</a>
<a class="sidebar-class" href="../../modules/common_editor/docs/scripts/properties_data.html">CE_PropertiesData</a>
</div><a class="sidebar-class module-var" href="../../modules/console_commands/docs/index.html">console_commands<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/console_commands/docs/scripts/console_start.html">ConsoleCommands</a>
</div><a class="sidebar-class module-var" href="../../modules/cursor_control/docs/index.html">cursor_control<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/cursor_control/docs/scripts/cursor_control.html">CursorControl</a>
</div><a class="sidebar-class module-var" href="../../modules/damagable/docs/index.html">damagable<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/damagable/docs/scripts/damagable_list.html">DamagableList</a>
<a class="sidebar-class" href="../../modules/damagable/docs/scripts/basic_damagable.html">BasicDamagable</a>
<a class="sidebar-class" href="../../modules/damagable/docs/scripts/damagable.html">Damagable</a>
<a class="sidebar-class" href="../../modules/damagable/docs/scripts/damagable_link.html">DamagableLink</a>
<a class="sidebar-class" href="../../modules/damagable/docs/scripts/damage_trigger.html">DamageTrigger</a>
<a class="sidebar-class" href="../../modules/damagable/docs/scripts/reasons.html">DamagableReasons</a>
</div><a class="sidebar-class module-var" href="../../modules/debris_control/docs/index.html">debris_control<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/debris_control/docs/scripts/debris_control.html">DebrisControl</a>
</div><a class="sidebar-class module-var" href="../../modules/debug_draw/docs/index.html">debug_draw<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/debug_draw/docs/scripts/debug_draw.html">DebugDraw</a>
</div><a class="sidebar-class module-var" href="../../modules/debug_timer/docs/index.html">debug_timer<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/debug_timer/docs/scripts/debug_timer.html">debug_timer</a>
</div><a class="sidebar-class module-var" href="../../modules/demo_status/docs/index.html">demo_status<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/demo_status/docs/scripts/demo_status.html">demo_status</a>
</div><a class="sidebar-class module-var" href="../../modules/dev_binds/docs/index.html">dev_binds<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/dev_binds/docs/scripts/dev_binds.html">DevBinds</a>
</div><a class="sidebar-class module-var" href="../../modules/dev_menu/docs/index.html">dev_menu<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/dev_menu/docs/scripts/dev_menu.html">DevMenu</a>
<a class="sidebar-class class-node" href="../../modules/dev_menu/docs/scripts/dev_menu_control.html">dev_menu_control</a>
</div><a class="sidebar-class module-var" href="../../modules/dev_text/docs/index.html">dev_text<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/dev_text/docs/scripts/dev_text.html">DevText</a>
</div><a class="sidebar-class module-var" href="../../modules/dialogue_system/docs/index.html">dialogue_system<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/dialogue_system/docs/scripts/dialog_creator.html">dialog_creator</a>
<a class="sidebar-class class-node" href="../../modules/dialogue_system/docs/scripts/graph_edit_connections.html">graph_edit_connections</a>
<a class="sidebar-class class-node" href="../../modules/dialogue_system/docs/scripts/answer_node.html">answer_node</a>
<a class="sidebar-class class-node" href="../../modules/dialogue_system/docs/scripts/choice_node.html">choice_node</a>
<a class="sidebar-class class-node" href="../../modules/dialogue_system/docs/scripts/ending_node.html">ending_node</a>
<a class="sidebar-class class-node" href="../../modules/dialogue_system/docs/scripts/option_node.html">option_node</a>
<a class="sidebar-class class-node" href="../../modules/dialogue_system/docs/scripts/start_node.html">start_node</a>
<a class="sidebar-class class-resource" href="../../modules/dialogue_system/docs/scripts/answer.html">DialogTreeAnswer</a>
<a class="sidebar-class class-resource" href="../../modules/dialogue_system/docs/scripts/choice.html">DialogTreeChoice</a>
<a class="sidebar-class class-resource" href="../../modules/dialogue_system/docs/scripts/dialog_tree.html">DialogTree</a>
<a class="sidebar-class class-resource" href="../../modules/dialogue_system/docs/scripts/ending.html">DialogTreeEnding</a>
<a class="sidebar-class class-resource" href="../../modules/dialogue_system/docs/scripts/option.html">DialogTreeOption</a>
<a class="sidebar-class class-resource" href="../../modules/dialogue_system/docs/scripts/start.html">DialogTreeStart</a>
</div><a class="sidebar-class module-var" href="../../modules/difficulty/docs/index.html">difficulty<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/difficulty/docs/scripts/difficulty.html">difficulty</a>
</div><a class="sidebar-class module-var" href="../../modules/discord_rpc/docs/index.html">discord_rpc<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/discord_rpc/docs/scripts/discord_game_rpc.html">DiscordGameRpc</a>
</div><a class="sidebar-class module-var" href="../../modules/doc_gen/docs/index.html">doc_gen<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-resource" href="../../modules/doc_gen/docs/scripts/generate_docs.html">GenerateDocs</a>
<a class="sidebar-class class-other" href="../../modules/doc_gen/docs/scripts/export_docs_standalone.html">export_docs_standalone</a>
</div><a class="sidebar-class module-var" href="../../modules/doc_info/docs/index.html">doc_info<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/doc_info/docs/scripts/doc_info_saver.html">DocInfoSaver</a>
<a class="sidebar-class class-resource" href="../../modules/doc_info/docs/scripts/doc_info.html">DocInfo</a>
</div><a class="sidebar-class module-var" href="../../modules/dynamic_weather/docs/index.html">dynamic_weather<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/dynamic_weather/docs/scripts/dynamic_weather_config.html">DynamicWeatherConfig</a>
<a class="sidebar-class class-node" href="../../modules/dynamic_weather/docs/scripts/dynamic_weather_manager.html">DynamicWeatherManager</a>
<a class="sidebar-class class-resource" href="../../modules/dynamic_weather/docs/scripts/dynamic_weather_data.html">DynamicWeatherData</a>
<a class="sidebar-class class-resource" href="../../modules/dynamic_weather/docs/scripts/dynamic_weather_preset.html">DynamicWeatherPreset</a>
</div><a class="sidebar-class module-var" href="../../modules/efflux_streamer/docs/index.html">efflux_streamer<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/efflux_streamer/docs/scripts/resource_streamer.html">ResourceStreamer</a>
<a class="sidebar-class class-node" href="../../modules/efflux_streamer/docs/scripts/streaming_server.html">streaming_server</a>
<a class="sidebar-class class-resource" href="../../modules/efflux_streamer/docs/scripts/streamed_property.html">StreamedProperty</a>
</div><a class="sidebar-class module-var" href="../../modules/electrowave/docs/index.html">electrowave<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/electrowave/docs/scripts/electrowave.html">Electrowave</a>
</div><a class="sidebar-class module-var" href="../../modules/event_manager/docs/index.html">event_manager<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/event_manager/docs/scripts/event_manager.html">EventManager</a>
</div><a class="sidebar-class module-var" href="../../modules/exit_stats/docs/index.html">exit_stats<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/exit_stats/docs/scripts/exit_scene.html">exit_scene</a>
</div><a class="sidebar-class module-var" href="../../modules/explosion/docs/index.html">explosion<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/explosion/docs/scripts/explosion.html">Explosion</a>
<a class="sidebar-class class-node" href="../../modules/explosion/docs/scripts/explosion_areas.html">ExplosionAreas</a>
<a class="sidebar-class class-node" href="../../modules/explosion/docs/scripts/explosion_particle_preloader.html">ExplosionParticlePreloader</a>
<a class="sidebar-class class-node" href="../../modules/explosion/docs/scripts/explosion_props.html">ExplosionProps</a>
</div><a class="sidebar-class module-var" href="../../modules/firearm_grenade/docs/index.html">firearm_grenade<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/firearm_grenade/docs/scripts/firearm_grenade.html">FirearmGrenade</a>
<a class="sidebar-class class-node" href="../../modules/firearm_grenade/docs/scripts/firearm_grenade_areas.html">FirearmGrenadeAreas</a>
</div><a class="sidebar-class module-var" href="../../modules/flare_fire/docs/index.html">flare_fire<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/flare_fire/docs/scripts/flare_fire.html">FlareFire</a>
</div><a class="sidebar-class module-var" href="../../modules/flashbang/docs/index.html">flashbang<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/flashbang/docs/scripts/flashbang.html">Flashbang</a>
</div><a class="sidebar-class module-var" href="../../modules/fonts/docs/index.html">fonts<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
</div><a class="sidebar-class module-var" href="../../modules/footstep/docs/index.html">footstep<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-resource" href="../../modules/footstep/docs/scripts/sounds_data.html">FootstepSoundsData</a>
<a class="sidebar-class" href="../../modules/footstep/docs/scripts/footstep.html">Footstep</a>
</div><a class="sidebar-class module-var" href="../../modules/game_menu/docs/index.html">game_menu<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/game_menu/docs/scripts/game_menu.html">GameMenu</a>
<a class="sidebar-class class-node" href="../../modules/game_menu/docs/scripts/achievement_icon.html">achievement_icon</a>
<a class="sidebar-class class-node" href="../../modules/game_menu/docs/scripts/difficulty_hint.html">difficulty_hint</a>
<a class="sidebar-class class-node" href="../../modules/game_menu/docs/scripts/input_button.html">input_button</a>
<a class="sidebar-class class-node" href="../../modules/game_menu/docs/scripts/main_control.html">main_control</a>
<a class="sidebar-class class-node" href="../../modules/game_menu/docs/scripts/notes_switcher.html">notes_switcher</a>
<a class="sidebar-class class-resource" href="../../modules/game_menu/docs/scripts/game_news_data.html">GameNewsData</a>
<a class="sidebar-class class-resource" href="../../modules/game_menu/docs/scripts/game_news_list.html">GameNewsList</a>
</div><a class="sidebar-class module-var" href="../../modules/game_start/docs/index.html">game_start<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/game_start/docs/scripts/game_start.html">game_start</a>
<a class="sidebar-class class-node" href="../../modules/game_start/docs/scripts/game_start_anim.html">game_start_anim</a>
<a class="sidebar-class class-node" href="../../modules/game_start/docs/scripts/game_start_autoload_init.html">GameStartAutoloadInit</a>
<a class="sidebar-class class-node" href="../../modules/game_start/docs/scripts/game_start_nums.html">game_start_nums</a>
</div><a class="sidebar-class module-var" href="../../modules/game_video/docs/index.html">game_video<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/game_video/docs/scripts/game_video.html">GameVideo</a>
</div><a class="sidebar-class module-var" href="../../modules/gamma_correction/docs/index.html">gamma_correction<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/gamma_correction/docs/scripts/gamma_correction.html">GammaCorrection</a>
</div><a class="sidebar-class module-var" href="../../modules/gas/docs/index.html">gas<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/gas/docs/scripts/gas.html">Gas</a>
</div><a class="sidebar-class module-var" href="../../modules/glitch_camera_scenery/docs/index.html">glitch_camera_scenery<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/glitch_camera_scenery/docs/scripts/glitch_camera_scenery.html">GlitchCameraScenery</a>
</div><a class="sidebar-class module-var" href="../../modules/globals/docs/index.html">globals<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/globals/docs/scripts/globals.html">Globals</a>
</div><a class="sidebar-class module-var" href="../../modules/gore_system/docs/index.html">gore_system<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/gore_system/docs/scripts/Gibplosions.html">GoreSystemGibs</a>
</div><a class="sidebar-class module-var" href="../../modules/graphics_control/docs/index.html">graphics_control<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/graphics_control/docs/scripts/graphics_control.html">GraphicsControl</a>
</div><a class="sidebar-class module-var" href="../../modules/gravity_control/docs/index.html">gravity_control<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/gravity_control/docs/scripts/gravity_control.html">GravityControl</a>
</div><a class="sidebar-class module-var" href="../../modules/grenade/docs/index.html">grenade<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/grenade/docs/scripts/grenade.html">Grenade</a>
<a class="sidebar-class class-node" href="../../modules/grenade/docs/scripts/grenade_models.html">GrenadeModels</a>
<a class="sidebar-class class-resource" href="../../modules/grenade/docs/scripts/grenade_logic_base.html">GrenadeLogicBase</a>
<a class="sidebar-class class-resource" href="../../modules/grenade/docs/scripts/basic_logic.html">BasicGrenadeLogic</a>
<a class="sidebar-class class-resource" href="../../modules/grenade/docs/scripts/flash_logic.html">FlashGrenadeLogic</a>
<a class="sidebar-class class-resource" href="../../modules/grenade/docs/scripts/frag_logic.html">FragGrenadeLogic</a>
<a class="sidebar-class class-resource" href="../../modules/grenade/docs/scripts/gas_logic.html">GasGrenadeLogic</a>
<a class="sidebar-class class-resource" href="../../modules/grenade/docs/scripts/teleporer_logic.html">TeleporterGrenadeLogic</a>
</div><a class="sidebar-class module-var" href="../../modules/heads_up_display/docs/index.html">heads_up_display<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/ammo_hud.html">AmmoHUD</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/ammo_pickup.html">ammo_pickup</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/boss_hud.html">BossHUD</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/crosshair_hud.html">CrosshairHUD</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/damage_indicator_logic.html">damage_indicator_logic</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/danger_indicator_hud.html">DangerIndicatorHUD</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/grenade_indicator_logic.html">grenade_indicator_logic</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/suppression_indicator_logic.html">suppression_indicator_logic</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/fps_label.html">fps_label</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/debug_info.html">debug_info</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/fader_hud.html">FaderHUD</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/fade_in.html">fade_in</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/fade_out.html">fade_out</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/health_hud.html">HealthHUD</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/item.html">ItemsHUDItemUI</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/items_hud.html">ItemsHUD</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/exp_prefab.html">exp_prefab</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/loadout_exp_hud.html">LoadoutExpHUD</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/loadout_weapon_hud.html">LoadoutWeaponHUD</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/location_tutorial_hud.html">LocationTutorialHUD</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/message.html">MessagePartHUD</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/message_hud.html">MessageHUD</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/death_hud.html">MissionFailedHUD</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/mission_status_hud.html">MissionStatusHUD</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/operation_start_hud.html">OperationStartHUD</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/plot_message_hud.html">PlotMessageHUD</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/plot_tell_hud.html">PlotTellHUD</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/resource_hud.html">ResourceHUD</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/resource_pickup.html">resource_pickup</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/fade_in.html">fade_in</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/tasks_hud.html">TasksHUD</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/timer_countdown_hud.html">TimerCountdownHUD</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/prefab_logic.html">prefab_logic</a>
<a class="sidebar-class class-node" href="../../modules/heads_up_display/docs/scripts/tutorial_hud.html">TutorialHUD</a>
<a class="sidebar-class class-resource" href="../../modules/heads_up_display/docs/scripts/item_data.html">ItemsHUDItemData</a>
<a class="sidebar-class" href="../../modules/heads_up_display/docs/scripts/heads_up_display.html">HeadsUpDisplay</a>
</div><a class="sidebar-class module-var" href="../../modules/hit_body/docs/index.html">hit_body<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/hit_body/docs/scripts/hit_body_tool.html">HitBodyTool</a>
<a class="sidebar-class" href="../../modules/hit_body/docs/scripts/hit_body.html">HitBody</a>
<a class="sidebar-class" href="../../modules/hit_body/docs/scripts/hit_body_property.html">HitBodyProperty</a>
</div><a class="sidebar-class module-var" href="../../modules/human_model/docs/index.html">human_model<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/human_model/docs/scripts/human_model_file_archive.html">HumanModelFileArchive</a>
<a class="sidebar-class class-node" href="../../modules/human_model/docs/scripts/ragdoll_list.html">RagdollList</a>
<a class="sidebar-class class-node" href="../../modules/human_model/docs/scripts/anim_event_caller.html">HumanModelAnimEventCaller</a>
<a class="sidebar-class class-node" href="../../modules/human_model/docs/scripts/ragdoll_logic.html">ragdoll_logic</a>
<a class="sidebar-class class-node" href="../../modules/human_model/docs/scripts/walker_control.html">walker_control</a>
<a class="sidebar-class class-resource" href="../../modules/human_model/docs/scripts/footstep_anim_footmark.html">HumanModelFootMark</a>
<a class="sidebar-class class-resource" href="../../modules/human_model/docs/scripts/footstep_anim_mark.html">HumanModelFootstepAnimMark</a>
<a class="sidebar-class class-resource" href="../../modules/human_model/docs/scripts/footstep_marks.html">HumanModelFootstepMarks</a>
<a class="sidebar-class class-resource" href="../../modules/human_model/docs/scripts/weapon_config.html">HumanWeaponConfig</a>
<a class="sidebar-class" href="../../modules/human_model/docs/scripts/human_model.html">HumanModel</a>
</div><a class="sidebar-class module-var" href="../../modules/kill_cam/docs/index.html">kill_cam<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/kill_cam/docs/scripts/kill_cam_manager.html">KillCamManager</a>
</div><a class="sidebar-class module-var" href="../../modules/laser_sight/docs/index.html">laser_sight<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/laser_sight/docs/scripts/laser_sight.html">LaserSight</a>
</div><a class="sidebar-class module-var" href="../../modules/limit_data_collector/docs/index.html">limit_data_collector<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/limit_data_collector/docs/scripts/limit_data_collector.html">LimitDataCollector</a>
</div><a class="sidebar-class module-var" href="../../modules/loadout_system/docs/index.html">loadout_system<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/loadout_system/docs/scripts/icon_gen_control.html">icon_gen_control</a>
<a class="sidebar-class class-node" href="../../modules/loadout_system/docs/scripts/loadout_selection.html">LoadoutSelection</a>
<a class="sidebar-class class-node" href="../../modules/loadout_system/docs/scripts/loadout_system.html">LoadoutSystem</a>
<a class="sidebar-class class-node" href="../../modules/loadout_system/docs/scripts/loadout_presentation.html">LoadoutPresentation</a>
<a class="sidebar-class class-node" href="../../modules/loadout_system/docs/scripts/loadout_presentation_page.html">loadout_presentation_page</a>
<a class="sidebar-class class-node" href="../../modules/loadout_system/docs/scripts/loadout_presentation_shared.html">loadout_presentation_shared</a>
<a class="sidebar-class class-node" href="../../modules/loadout_system/docs/scripts/item.html">item</a>
<a class="sidebar-class class-node" href="../../modules/loadout_system/docs/scripts/main_control.html">main_control</a>
<a class="sidebar-class class-resource" href="../../modules/loadout_system/docs/scripts/loadout_armor_item.html">LoadoutArmorItem</a>
<a class="sidebar-class class-resource" href="../../modules/loadout_system/docs/scripts/loadout_item_data_base.html">LoadoutItemDataBase</a>
<a class="sidebar-class class-resource" href="../../modules/loadout_system/docs/scripts/loadout_operation_item.html">LoadoutOperationItem</a>
<a class="sidebar-class class-resource" href="../../modules/loadout_system/docs/scripts/loadout_perk_item.html">LoadoutPerkItem</a>
<a class="sidebar-class class-resource" href="../../modules/loadout_system/docs/scripts/loadout_special_device_item.html">LoadoutSpecialDeviceItem</a>
<a class="sidebar-class class-resource" href="../../modules/loadout_system/docs/scripts/loadout_weapon_item.html">LoadoutWeaponItem</a>
<a class="sidebar-class" href="../../modules/loadout_system/docs/scripts/loadout_logic_base.html">LoadoutLogicBase</a>
<a class="sidebar-class" href="../../modules/loadout_system/docs/scripts/op_factory.html">op_factory</a>
<a class="sidebar-class" href="../../modules/loadout_system/docs/scripts/perk_engineer.html">perk_engineer</a>
<a class="sidebar-class" href="../../modules/loadout_system/docs/scripts/perk_hitman.html">perk_hitman</a>
<a class="sidebar-class" href="../../modules/loadout_system/docs/scripts/perk_mystery.html">perk_mystery</a>
<a class="sidebar-class class-other" href="../../modules/loadout_system/docs/scripts/icon_gen.html">icon_gen</a>
</div><a class="sidebar-class module-var" href="../../modules/localization/docs/index.html">localization<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/localization/docs/scripts/localization.html">Localization</a>
</div><a class="sidebar-class module-var" href="../../modules/locations_tools/docs/index.html">locations_tools<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/locations_tools/docs/scripts/debris_remove.html">debris_remove</a>
<a class="sidebar-class class-node" href="../../modules/locations_tools/docs/scripts/location_blockout.html">LocationBlockout</a>
<a class="sidebar-class class-node" href="../../modules/locations_tools/docs/scripts/location_blockout_fast.html">LocationBlockoutFast</a>
<a class="sidebar-class class-node" href="../../modules/locations_tools/docs/scripts/location_blockout_mesh.html">LocationBlockoutMesh</a>
<a class="sidebar-class class-node" href="../../modules/locations_tools/docs/scripts/location_dynamic_objects.html">location_dynamic_objects</a>
<a class="sidebar-class class-node" href="../../modules/locations_tools/docs/scripts/location_model_tool.html">LocationModelTool</a>
<a class="sidebar-class class-node" href="../../modules/locations_tools/docs/scripts/location_part.html">LocationPart</a>
<a class="sidebar-class class-node" href="../../modules/locations_tools/docs/scripts/location_physics_global.html">LocationPhysicsGlobal</a>
<a class="sidebar-class class-node" href="../../modules/locations_tools/docs/scripts/location_portal.html">LocationPortal</a>
<a class="sidebar-class class-node" href="../../modules/locations_tools/docs/scripts/location_prefab.html">LocationPrefab</a>
<a class="sidebar-class class-node" href="../../modules/locations_tools/docs/scripts/location_prop.html">LocationProp</a>
<a class="sidebar-class class-node" href="../../modules/locations_tools/docs/scripts/location_props.html">LocationProps</a>
<a class="sidebar-class class-node" href="../../modules/locations_tools/docs/scripts/location_prop_file_archive.html">LocationPropFileArchive</a>
<a class="sidebar-class class-node" href="../../modules/locations_tools/docs/scripts/location_shader_compile_view.html">LocationShaderCompileView</a>
<a class="sidebar-class class-resource" href="../../modules/locations_tools/docs/scripts/location_blockout_material_config.html">LocationBlockoutMaterialConfig</a>
<a class="sidebar-class class-resource" href="../../modules/locations_tools/docs/scripts/location_collision_data.html">LocationCollisionData</a>
<a class="sidebar-class class-resource" href="../../modules/locations_tools/docs/scripts/location_collision_dict.html">LocationCollisionDict</a>
<a class="sidebar-class class-resource" href="../../modules/locations_tools/docs/scripts/location_physics_data.html">LocationPhysicsData</a>
<a class="sidebar-class class-resource" href="../../modules/locations_tools/docs/scripts/location_prop_config.html">LocationPropConfig</a>
<a class="sidebar-class" href="../../modules/locations_tools/docs/scripts/location_physics.html">LocationPhysics</a>
</div><a class="sidebar-class module-var" href="../../modules/location_base_combiner/docs/index.html">location_base_combiner<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/location_base_combiner/docs/scripts/location_base_combiner.html">LocationBaseCombiner</a>
<a class="sidebar-class class-node" href="../../modules/location_base_combiner/docs/scripts/location_base_combiner_part.html">LocationBaseCombinerPart</a>
</div><a class="sidebar-class module-var" href="../../modules/location_changer/docs/index.html">location_changer<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/location_changer/docs/scripts/loading_screen_notes.html">LoadingScreenNotes</a>
<a class="sidebar-class class-node" href="../../modules/location_changer/docs/scripts/location_changer.html">LocationChanger</a>
<a class="sidebar-class class-resource" href="../../modules/location_changer/docs/scripts/loading_screen_data.html">LoadingScreenData</a>
<a class="sidebar-class class-resource" href="../../modules/location_changer/docs/scripts/loading_screen_notes_data.html">LoadingScreenNotesData</a>
</div><a class="sidebar-class module-var" href="../../modules/location_chunk/docs/index.html">location_chunk<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/location_chunk/docs/scripts/location_chunk_manager.html">LocationChunkManager</a>
<a class="sidebar-class" href="../../modules/location_chunk/docs/scripts/location_chunk.html">LocationChunk</a>
</div><a class="sidebar-class module-var" href="../../modules/location_cutscene/docs/index.html">location_cutscene<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/location_cutscene/docs/scripts/location_cutscene.html">LocationCutscene</a>
<a class="sidebar-class class-node" href="../../modules/location_cutscene/docs/scripts/location_cutscene_player.html">LocationCutscenePlayer</a>
<a class="sidebar-class class-resource" href="../../modules/location_cutscene/docs/scripts/location_cutscene_data.html">LocationCutsceneData</a>
<a class="sidebar-class class-other" href="../../modules/location_cutscene/docs/scripts/location_cutscene_data_update.html">location_cutscene_data_update</a>
</div><a class="sidebar-class module-var" href="../../modules/location_decal/docs/index.html">location_decal<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/location_decal/docs/scripts/remove_after_time.html">remove_after_time</a>
<a class="sidebar-class class-node" href="../../modules/location_decal/docs/scripts/location_decal.html">LocationDecal</a>
<a class="sidebar-class class-node" href="../../modules/location_decal/docs/scripts/location_decal_remover.html">LocationDecalRemover</a>
</div><a class="sidebar-class module-var" href="../../modules/location_decal_mesh/docs/index.html">location_decal_mesh<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/location_decal_mesh/docs/scripts/location_decal_mesh.html">LocationDecalMesh</a>
<a class="sidebar-class class-node" href="../../modules/location_decal_mesh/docs/scripts/location_decal_mesh_combiner.html">LocationDecalMeshCombiner</a>
<a class="sidebar-class class-node" href="../../modules/location_decal_mesh/docs/scripts/projectdecal.html">projectdecal</a>
<a class="sidebar-class class-resource" href="../../modules/location_decal_mesh/docs/scripts/location_decal_mesh_defaults.html">LocationDecalMeshDefaults</a>
</div><a class="sidebar-class module-var" href="../../modules/location_dust_motes/docs/index.html">location_dust_motes<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/location_dust_motes/docs/scripts/location_dust_motes.html">LocationDustMotes</a>
</div><a class="sidebar-class module-var" href="../../modules/location_export_helper/docs/index.html">location_export_helper<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/location_export_helper/docs/scripts/location_export.html">location_export</a>
</div><a class="sidebar-class module-var" href="../../modules/location_fire/docs/index.html">location_fire<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/location_fire/docs/scripts/fire.html">LocationFire</a>
<a class="sidebar-class class-node" href="../../modules/location_fire/docs/scripts/fire_global.html">FireGlobal</a>
</div><a class="sidebar-class module-var" href="../../modules/location_generator/docs/index.html">location_generator<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/location_generator/docs/scripts/location_generator.html">LocationGenerator</a>
<a class="sidebar-class class-resource" href="../../modules/location_generator/docs/scripts/locgen_location_data.html">LocGenLocationData</a>
<a class="sidebar-class class-resource" href="../../modules/location_generator/docs/scripts/locgen_prefab_data.html">LocGenPrefabData</a>
<a class="sidebar-class" href="../../modules/location_generator/docs/scripts/locgen_cell_data.html">LocGenCellData</a>
</div><a class="sidebar-class module-var" href="../../modules/location_light_volume/docs/index.html">location_light_volume<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/location_light_volume/docs/scripts/location_light_volume.html">LocationLightVolume</a>
</div><a class="sidebar-class module-var" href="../../modules/location_LOD/docs/index.html">location_LOD<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/location_LOD/docs/scripts/location_LOD.html">LocationLOD</a>
<a class="sidebar-class class-node" href="../../modules/location_LOD/docs/scripts/viewport_texture_render.html">ViewportTextureRender</a>
</div><a class="sidebar-class module-var" href="../../modules/location_logic/docs/index.html">location_logic<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/location_logic/docs/scripts/base_scene.html">BaseScene</a>
<a class="sidebar-class class-node" href="../../modules/location_logic/docs/scripts/light_queue.html">light_queue</a>
<a class="sidebar-class class-node" href="../../modules/location_logic/docs/scripts/location_events.html">LocationEvents</a>
<a class="sidebar-class class-node" href="../../modules/location_logic/docs/scripts/base.html">LocationBase</a>
<a class="sidebar-class class-node" href="../../modules/location_logic/docs/scripts/button_trigger_cube.html">LocationButtonTriggerCube</a>
<a class="sidebar-class class-node" href="../../modules/location_logic/docs/scripts/meshes_node.html">meshes_node</a>
<a class="sidebar-class class-node" href="../../modules/location_logic/docs/scripts/trigger_cube.html">LocationTriggerCube</a>
<a class="sidebar-class" href="../../modules/location_logic/docs/scripts/button_trigger.html">LocationButtonTrigger</a>
<a class="sidebar-class" href="../../modules/location_logic/docs/scripts/button_usable.html">LocationButtonTriggerUsable</a>
<a class="sidebar-class" href="../../modules/location_logic/docs/scripts/exit_trigger.html">ExitTrigger</a>
<a class="sidebar-class" href="../../modules/location_logic/docs/scripts/logic_base.html">LocationLogicBase</a>
<a class="sidebar-class" href="../../modules/location_logic/docs/scripts/trigger.html">LocationTrigger</a>
</div><a class="sidebar-class module-var" href="../../modules/location_mesh_combiner/docs/index.html">location_mesh_combiner<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/location_mesh_combiner/docs/scripts/location_mesh_combiner.html">LocationMeshCombiner</a>
<a class="sidebar-class class-node" href="../../modules/location_mesh_combiner/docs/scripts/location_mesh_combiner_cube.html">LocationMeshCombinerCube</a>
</div><a class="sidebar-class module-var" href="../../modules/location_particle_point/docs/index.html">location_particle_point<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/location_particle_point/docs/scripts/location_particle_point.html">LocationParticlePoint</a>
</div><a class="sidebar-class module-var" href="../../modules/location_shader_compile/docs/index.html">location_shader_compile<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/location_shader_compile/docs/scripts/location_shader_compile.html">LocationShaderCompile</a>
</div><a class="sidebar-class module-var" href="../../modules/location_sky_clouds/docs/index.html">location_sky_clouds<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/location_sky_clouds/docs/scripts/location_sky_clouds.html">LocationSkyClouds</a>
</div><a class="sidebar-class module-var" href="../../modules/location_smoke/docs/index.html">location_smoke<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/location_smoke/docs/scripts/location_smoke.html">LocationSmoke</a>
</div><a class="sidebar-class module-var" href="../../modules/location_sprite/docs/index.html">location_sprite<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/location_sprite/docs/scripts/location_sprite.html">LocationSprite</a>
</div><a class="sidebar-class module-var" href="../../modules/location_tutorial/docs/index.html">location_tutorial<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/location_tutorial/docs/scripts/location_tutorial.html">LocationTutorial</a>
<a class="sidebar-class class-node" href="../../modules/location_tutorial/docs/scripts/view.html">LocationTutorialView</a>
</div><a class="sidebar-class module-var" href="../../modules/location_zone/docs/index.html">location_zone<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class" href="../../modules/location_zone/docs/scripts/location_zone.html">LocationZone</a>
</div><a class="sidebar-class module-var" href="../../modules/main_camera/docs/index.html">main_camera<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/main_camera/docs/scripts/main_camera.html">MainCamera</a>
</div><a class="sidebar-class module-var" href="../../modules/main_menu/docs/index.html">main_menu<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/main_menu/docs/scripts/main_menu_camera.html">MainMenuCamera</a>
</div><a class="sidebar-class module-var" href="../../modules/mod_support/docs/index.html">mod_support<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/mod_support/docs/scripts/mod_support.html">ModSupport</a>
</div><a class="sidebar-class module-var" href="../../modules/music/docs/index.html">music<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/music/docs/scripts/music.html">Music</a>
</div><a class="sidebar-class module-var" href="../../modules/non_playable_character/docs/index.html">non_playable_character<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/non_playable_character/docs/scripts/NPC_attack_queue.html">NPCAttackQueue</a>
<a class="sidebar-class class-node" href="../../modules/non_playable_character/docs/scripts/NPC_max_distance_manager.html">NPCMaxDistanceManager</a>
<a class="sidebar-class class-node" href="../../modules/non_playable_character/docs/scripts/NPC_names.html">NPCNames</a>
<a class="sidebar-class class-node" href="../../modules/non_playable_character/docs/scripts/NPC_position_queue.html">NPCPositionQueue</a>
<a class="sidebar-class class-node" href="../../modules/non_playable_character/docs/scripts/NPC_spawn_queue.html">NPCSpawnQueue</a>
<a class="sidebar-class class-node" href="../../modules/non_playable_character/docs/scripts/NPC_vision_queue.html">NPCVisionQueue</a>
<a class="sidebar-class class-node" href="../../modules/non_playable_character/docs/scripts/logic_state_label.html">logic_state_label</a>
<a class="sidebar-class class-node" href="../../modules/non_playable_character/docs/scripts/dropped_weapon.html">dropped_weapon</a>
<a class="sidebar-class class-node" href="../../modules/non_playable_character/docs/scripts/NPC_spawn.html">NPCSpawn</a>
<a class="sidebar-class class-node" href="../../modules/non_playable_character/docs/scripts/patrol_point_hint.html">NPCPatrolPointHint</a>
<a class="sidebar-class class-node" href="../../modules/non_playable_character/docs/scripts/non_playable_character.html">NonPlayableCharacter</a>
<a class="sidebar-class class-resource" href="../../modules/non_playable_character/docs/scripts/character_data.html">NPCCharacterData</a>
<a class="sidebar-class class-resource" href="../../modules/non_playable_character/docs/scripts/hitbox_damage_multiplier.html">NPCHitboxDamageMultiplier</a>
<a class="sidebar-class class-resource" href="../../modules/non_playable_character/docs/scripts/hitbox_data.html">NPCHitboxData</a>
<a class="sidebar-class class-resource" href="../../modules/non_playable_character/docs/scripts/weapon_config.html">NPCWeaponConfig</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/base_script.html">NPCBaseScript</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/minc_chemical_unit.html">minc_chemical_unit</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/minc_electro_unit.html">minc_electro_unit</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/minc_explosives_unit.html">minc_explosives_unit</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/minc_heavy_unit_weak.html">minc_heavy_unit_weak</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/logic.html">NPCLogic</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/dead_body_search.html">dead_body_search</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/pathfinding.html">NPCPathfinding</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/act_playing.html">_Citizen_ActPlaying</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/attack_player.html">_Citizen_AttackPlayer</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/none.html">_Citizen_None</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/panic.html">_Citizen_Panic</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/panic_anim.html">_Citizen_PanicAnim</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/patrol.html">_Citizen_Patrol</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/attack.html">_HeavyUnit_Attack</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/attack_player.html">_HeavyUnit_AttackPlayer</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/follow_player.html">_HeavyUnit_FollowAttack</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/none.html">_HeavyUnit_None</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/patrol.html">_HeavyUnit_Patrol</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/stand_and_shoot.html">_HeavyUnit_StandAndShoot</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/stand_and_shoot_player.html">_HeavyUnit_StandAndShootPlayer</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/test_look.html">_HeavyUnit_TestLook</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/wait_enemy.html">_HeavyUnit_WaitEnemy</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/attack.html">_LightUnit_Attack</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/attack_player.html">_LightUnit_AttackPlayer</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/follow_player.html">_LightUnit_FollowAttack</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/none.html">_LightUnit_None</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/patrol.html">_LightUnit_Patrol</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/stand_and_shoot.html">_LightUnit_StandAndShoot</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/stand_and_shoot_player.html">_LightUnit_StandAndShootPlayer</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/test_look.html">_LightUnit_TestLook</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/wait_enemy.html">_LightUnit_WaitEnemy</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/state_base.html">NPCLogicState</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/base_script_human.html">NPCBaseScriptHuman</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/human_weapon_handler.html">NPCHumanWeaponHandler</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/state_base_human.html">NPCLogicStateHuman</a>
<a class="sidebar-class" href="../../modules/non_playable_character/docs/scripts/human.html">NPCHuman</a>
</div><a class="sidebar-class module-var" href="../../modules/occlusion_culling/docs/index.html">occlusion_culling<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/occlusion_culling/docs/scripts/cull_chunk_knife.html">CullChunkKnife</a>
<a class="sidebar-class class-node" href="../../modules/occlusion_culling/docs/scripts/cull_view.html">CullView</a>
<a class="sidebar-class class-node" href="../../modules/occlusion_culling/docs/scripts/occlusion_culling.html">OcclusionCulling</a>
<a class="sidebar-class class-resource" href="../../modules/occlusion_culling/docs/scripts/bake_data.html">OcclusionCullingBakeData</a>
<a class="sidebar-class class-resource" href="../../modules/occlusion_culling/docs/scripts/chunk_data.html">OcclusionCullingChunkData</a>
<a class="sidebar-class" href="../../modules/occlusion_culling/docs/scripts/cull_chunk.html">CullChunk</a>
</div><a class="sidebar-class module-var" href="../../modules/player_controller/docs/index.html">player_controller<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/player_controller/docs/scripts/global_data.html">PlayerData</a>
<a class="sidebar-class class-node" href="../../modules/player_controller/docs/scripts/pc_water_list.html">PCWaterList</a>
<a class="sidebar-class class-node" href="../../modules/player_controller/docs/scripts/player_stats.html">PlayerStats</a>
<a class="sidebar-class class-node" href="../../modules/player_controller/docs/scripts/ladder.html">PlayerControllerLadder</a>
<a class="sidebar-class class-node" href="../../modules/player_controller/docs/scripts/player_spawn.html">PlayerSpawn</a>
<a class="sidebar-class class-node" href="../../modules/player_controller/docs/scripts/player_teleport_pos.html">PlayerTeleportPos</a>
<a class="sidebar-class class-node" href="../../modules/player_controller/docs/scripts/water.html">PlayerControllerWater</a>
<a class="sidebar-class class-node" href="../../modules/player_controller/docs/scripts/player_main.html">PlayerController</a>
<a class="sidebar-class" href="../../modules/player_controller/docs/scripts/mouse_look.html">PlayerMouseLook</a>
<a class="sidebar-class" href="../../modules/player_controller/docs/scripts/player_camera_motion.html">PlayerCameraMotion</a>
<a class="sidebar-class" href="../../modules/player_controller/docs/scripts/state_debug_fly.html">PlayerStateDebugFly</a>
<a class="sidebar-class" href="../../modules/player_controller/docs/scripts/state_ladder.html">PlayerStateLadder</a>
<a class="sidebar-class" href="../../modules/player_controller/docs/scripts/state_walk.html">PlayerStateWalk</a>
<a class="sidebar-class" href="../../modules/player_controller/docs/scripts/state_water.html">PlayerStateWater</a>
<a class="sidebar-class" href="../../modules/player_controller/docs/scripts/stats_adder.html">PlayerStatsAdder</a>
<a class="sidebar-class" href="../../modules/player_controller/docs/scripts/weapon_handler.html">PlayerWeaponHandler</a>
</div><a class="sidebar-class module-var" href="../../modules/player_weapon_system/docs/index.html">player_weapon_system<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/player_weapon_system/docs/scripts/building_UI.html">building_UI</a>
<a class="sidebar-class class-node" href="../../modules/player_weapon_system/docs/scripts/replace_actionkeys.html">replace_actionkeys</a>
<a class="sidebar-class class-resource" href="../../modules/player_weapon_system/docs/scripts/weapon.html">PlayerWeapon</a>
<a class="sidebar-class class-resource" href="../../modules/player_weapon_system/docs/scripts/building_weapon.html">PlayerBuildingWeapon</a>
<a class="sidebar-class class-resource" href="../../modules/player_weapon_system/docs/scripts/firearm_bio_weapon.html">PlayerFirearmBioWeapon</a>
<a class="sidebar-class class-resource" href="../../modules/player_weapon_system/docs/scripts/firearm_electro_weapon.html">PlayerFirearmElectroWeapon</a>
<a class="sidebar-class class-resource" href="../../modules/player_weapon_system/docs/scripts/firearm_flash_weapon.html">PlayerFirearmFlashWeapon</a>
<a class="sidebar-class class-resource" href="../../modules/player_weapon_system/docs/scripts/firearm_weapon.html">PlayerFirearmWeapon</a>
<a class="sidebar-class class-resource" href="../../modules/player_weapon_system/docs/scripts/grenade_weapon.html">PlayerGrenadeWeapon</a>
<a class="sidebar-class class-resource" href="../../modules/player_weapon_system/docs/scripts/item.html">PlayerAnimatedItem</a>
<a class="sidebar-class class-resource" href="../../modules/player_weapon_system/docs/scripts/item_medical.html">PlayerAnimatedItemMedical</a>
<a class="sidebar-class class-resource" href="../../modules/player_weapon_system/docs/scripts/melee_pickaxe_weapon.html">PlayerMeleePickaxeWeapon</a>
<a class="sidebar-class class-resource" href="../../modules/player_weapon_system/docs/scripts/melee_weapon.html">PlayerMeleeWeapon</a>
<a class="sidebar-class" href="../../modules/player_weapon_system/docs/scripts/weapon_system.html">PlayerWeaponSystem</a>
</div><a class="sidebar-class module-var" href="../../modules/post_processing_system/docs/index.html">post_processing_system<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-resource" href="../../modules/post_processing_system/docs/scripts/armor_helmet.html">ArmorHelmetPostProcessing</a>
<a class="sidebar-class class-resource" href="../../modules/post_processing_system/docs/scripts/armor_helmet_break.html">ArmorHelmetBreakPostProcessing</a>
<a class="sidebar-class class-resource" href="../../modules/post_processing_system/docs/scripts/black_debug.html">BlackDebugPostProcessing</a>
<a class="sidebar-class class-resource" href="../../modules/post_processing_system/docs/scripts/corner_color.html">CornerColorPostProcessing</a>
<a class="sidebar-class class-resource" href="../../modules/post_processing_system/docs/scripts/drug_effect.html">DrugEffectPostProcessing</a>
<a class="sidebar-class class-resource" href="../../modules/post_processing_system/docs/scripts/drug_rgb.html">DrugRGBPostProcessing</a>
<a class="sidebar-class class-resource" href="../../modules/post_processing_system/docs/scripts/flashbang.html">FlashbangPostProcessing</a>
<a class="sidebar-class class-resource" href="../../modules/post_processing_system/docs/scripts/flashbang_blur.html">FlashbangBlurPostProcessing</a>
<a class="sidebar-class class-resource" href="../../modules/post_processing_system/docs/scripts/hcss_outline.html">HCSSOutlinePostProcessing</a>
<a class="sidebar-class class-resource" href="../../modules/post_processing_system/docs/scripts/hitman.html">HitmanPostProcessing</a>
<a class="sidebar-class class-resource" href="../../modules/post_processing_system/docs/scripts/low_hp.html">LowHPPostProcessing</a>
<a class="sidebar-class class-resource" href="../../modules/post_processing_system/docs/scripts/motion_blur.html">MotionBlurPostProcessing</a>
<a class="sidebar-class class-resource" href="../../modules/post_processing_system/docs/scripts/night_vision.html">NightVisionPostProcessing</a>
<a class="sidebar-class class-resource" href="../../modules/post_processing_system/docs/scripts/special_ability_overlay.html">SpecialAbilityOverlayPostProcessing</a>
<a class="sidebar-class class-resource" href="../../modules/post_processing_system/docs/scripts/SSAO.html">SSAOPostProcessing</a>
<a class="sidebar-class class-resource" href="../../modules/post_processing_system/docs/scripts/suppression.html">SuppressionPostProcessing</a>
<a class="sidebar-class class-resource" href="../../modules/post_processing_system/docs/scripts/underwater.html">UnderwaterPostProcessing</a>
<a class="sidebar-class class-resource" href="../../modules/post_processing_system/docs/scripts/vignette.html">VignettePostProcessing</a>
<a class="sidebar-class class-resource" href="../../modules/post_processing_system/docs/scripts/post_processing_base.html">PostProcessingBase</a>
<a class="sidebar-class" href="../../modules/post_processing_system/docs/scripts/post_processing_system.html">PostProcessingSystem</a>
</div><a class="sidebar-class module-var" href="../../modules/pre_mission_dialog/docs/index.html">pre_mission_dialog<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/pre_mission_dialog/docs/scripts/dialog.html">dialog</a>
<a class="sidebar-class class-node" href="../../modules/pre_mission_dialog/docs/scripts/option.html">option</a>
<a class="sidebar-class class-node" href="../../modules/pre_mission_dialog/docs/scripts/pre_mission_dialog.html">PreMissionDialog</a>
<a class="sidebar-class" href="../../modules/pre_mission_dialog/docs/scripts/dialog_logic_base.html">DialogLogicBase</a>
</div><a class="sidebar-class module-var" href="../../modules/room_debug/docs/index.html">room_debug<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/room_debug/docs/scripts/room_debug.html">RoomDebug</a>
</div><a class="sidebar-class module-var" href="../../modules/scene_changer/docs/index.html">scene_changer<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/scene_changer/docs/scripts/scene_changer.html">SceneChanger</a>
</div><a class="sidebar-class module-var" href="../../modules/script_component/docs/index.html">script_component<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_baked_lightmap.html">COM_BakedLightmap</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_baked_light_config.html">COM_BakedLightConfig</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_dynamic_weather_night_only.html">COM_DynamicWeatherNightOnly</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_level_transition.html">COM_LevelTransition</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_level_transition_loadout.html">COM_LevelTransitionLoadout</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_location_env_blend.html">COM_LocationEnvBlend</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_main_menu.html">COM_MainMenu</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_moving_sound.html">COM_MovingSound</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_prop_achievement_find.html">COM_PropAchievementFind</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_prop_button.html">COM_PropButton</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_prop_consumable.html">COM_PropConsumable</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_prop_dig_resource.html">COM_PropDigResource</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_prop_door_moving.html">COM_PropDoorMoving</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_prop_door_rotating.html">COM_PropDoorRotating</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_prop_exp_briefcase.html">COM_PropExpBriefcase</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_prop_loadout_item.html">COM_PropLoadoutItem</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_prop_lootable_resources.html">COM_PropLootableResources</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_prop_machine_gun.html">COM_PropMachineGun</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_prop_machine_gun_explosive.html">COM_PropMachineGunExplosive</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_prop_rotating.html">COM_PropRotating</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_prop_stack.html">COM_PropStack</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_prop_teleport_door.html">COM_PropTeleportDoor</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_prop_turret.html">COM_PropTurret</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_prop_usable_item.html">COM_PropUsableItem</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_prop_weapon.html">COM_PropWeapon</a>
<a class="sidebar-class class-node" href="../../modules/script_component/docs/scripts/com_surface_particle.html">COM_SurfaceParticle</a>
<a class="sidebar-class" href="../../modules/script_component/docs/scripts/com_omnilight_optimizer.html">COM_OmnilightOptimizer</a>
<a class="sidebar-class" href="../../modules/script_component/docs/scripts/prop_dig_resource.html">PropDigResourceHit</a>
<a class="sidebar-class" href="../../modules/script_component/docs/scripts/prop_door_rotating.html">PropDoorRotatingHit</a>
</div><a class="sidebar-class module-var" href="../../modules/script_toolkit/docs/index.html">script_toolkit<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_activate_killcam.html">ST_ActivateKillcam</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_animation_player_method_caller.html">ST_AnimationPlayerMethodCaller</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_any_npc_killed.html">ST_AnyNPCKilled</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_battlefield.html">ST_Battlefield</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_chance_event.html">ST_ChanceEvent</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_change_color_grading_lut.html">ST_ChangeColorGradingLUT</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_change_faction_relationship.html">ST_ChangeFactionRelationship</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_change_location.html">ST_ChangeLocation</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_change_npc_logic_state.html">ST_ChangeNPCLogicState</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_change_npc_logic_state_on_trigger.html">ST_ChangeNPCLogicStateOnTrigger</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_change_parent_visibility.html">ST_ChangeParentVisibility</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_change_player_hands.html">ST_ChangePlayerHands</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_change_player_legs.html">ST_ChangePlayerLegs</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_change_player_weapon.html">ST_ChangePlayerWeapon</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_character_count_message.html">ST_CharacterCountMessage</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_character_random_phrase.html">ST_CharacterRandomPhrase</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_character_say_random.html">ST_CharacterSayRandom</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_checkpoint_on_event.html">ST_CheckpointOnEvent</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_check_enemy_count.html">ST_CheckEnemyCount</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_check_if_demo.html">ST_CheckIfDemo</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_check_if_named_npcs_alive.html">ST_CheckIfNamedNPCsAlive</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_check_if_npcs_alive.html">ST_CheckIfNPCsAlive</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_check_if_trigger_on_special_prop.html">ST_CheckIfTriggerOnSpecialProp</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_check_props_amount.html">ST_CheckPropsAmount</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_comics_player.html">ST_ComicsPlayer</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_control_drug_rgb.html">ST_ControlDrugRGB</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_control_usable_showup.html">ST_ControlUsableShowup</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_delayed_event.html">ST_DelayedEvent</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_dialog_messages.html">ST_DialogMessages</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_dynamic_weather_assign.html">ST_DynamicWeatherAssign</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_dynamic_weather_randomize.html">ST_DynamicWeatherRandomize</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_dynamic_weather_set.html">ST_DynamicWeatherSet</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_env_mute.html">ST_EnvMute</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_event_if_task_complete.html">ST_EventIfTaskComplete</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_event_on_checkpoint_load.html">ST_EventOnCheckpointLoad</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_event_on_start.html">ST_EventOnStart</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_event_queue.html">ST_EventQueue</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_event_to_one_visible_node.html">ST_EventToOneVisibleNode</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_explosion_on_event.html">ST_ExplosionOnEvent</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_fire_controller.html">ST_FireController</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_globals_check_bool.html">ST_GlobalsCheckBool</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_globals_set_bool.html">ST_GlobalsSetBool</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_gravity_control.html">ST_GravityControl</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_hack_waves.html">ST_HackWaves</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_instance_location_prefab.html">ST_InstanceLocationPrefab</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_kill_NPC.html">ST_KillNPC</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_lerp_light_energy_on_event.html">ST_LerpLightEnergyOnEvent</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_light_color_sine_blend.html">ST_LightColorSineBlend</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_light_flicker.html">ST_LightFlicker</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_loadout_add_exp.html">ST_LoadoutAddExp</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_loadout_add_temp_exp.html">ST_LoadoutAddTempExp</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_loadout_apply_temp_exp.html">ST_LoadoutApplyTempExp</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_loadout_reset_temp_exp.html">ST_LoadoutResetTempExp</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_message.html">ST_Message</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_mission_status_hud.html">ST_MissionStatusHUD</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_money_change.html">ST_MoneyChange</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_money_trade.html">ST_MoneyTrade</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_money_wallet.html">ST_MoneyWallet</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_multiple_events.html">ST_MultipleEvents</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_multiple_to_one_event.html">ST_MultipleToOneEvent</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_music.html">ST_Music</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_NPC_exit_act_mode.html">ST_NPCExitActMode</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_NPC_on_trigger_check.html">ST_NPCOnTriggerCheck</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_NPC_play_act_animation_once.html">ST_NPCPlayActAnimationOnce</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_NPC_play_act_on_origin.html">ST_NPCPlayActOnOrigin</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_NPC_set_sight_target.html">ST_NPCSetSightTarget</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_NPC_set_walk_target.html">ST_NPCSetWalkTarget</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_nullify_prop_origin_on_trigger.html">ST_NullifyPropOriginOnTrigger</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_once_only.html">ST_OnceOnly</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_one_node_whitelist.html">ST_OneNodeWhitelist</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_player_ammo_pickup.html">ST_PlayerAmmoPickup</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_player_check_weapons.html">ST_PlayerCheckWeapons</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_player_fall_anim.html">ST_PlayerFallAnim</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_player_interaction_fake.html">ST_PlayerInteractionFake</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_player_lock_controls.html">ST_PlayerLockControls</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_player_low_height_pos_check.html">ST_PlayerLowHeightPosCheck</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_player_move_mult.html">ST_PlayerMoveMult</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_player_night_vision_control.html">ST_PlayerNightVisionControl</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_player_set_health.html">ST_PlayerSetHealth</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_player_steal_items.html">ST_PlayerStealItems</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_player_strip_weapons.html">ST_PlayerStripWeapons</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_player_weapon_take_anim.html">ST_PlayerWeaponTakeAnim</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_play_2D_sound.html">ST_Play2DSound</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_play_parent_animation_player.html">ST_PlayParentAnimationPlayer</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_plot_tell_hud.html">ST_PlotTellHUD</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_props_full_list.html">ST_PropsFullList</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_prop_anim_on_event.html">ST_PropAnimOnEvent</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_prop_destroy_on_event.html">ST_PropDestroyOnEvent</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_prop_medkit.html">ST_PropMedkit</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_quick_fade.html">ST_QuickFade</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_random_events.html">ST_RandomEvents</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_remove_if_task_complete.html">ST_RemoveIfTaskComplete</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_remove_parent_in_time.html">ST_RemoveParentInTime</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_remove_parent_on_event.html">ST_RemoveParentOnEvent</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_remove_parent_prop_if_used.html">ST_RemoveParentPropIfUsed</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_remove_prop_on_trigger.html">ST_RemovePropOnTrigger</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_repeater.html">ST_Repeater</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_resource_hud_text.html">ST_ResourceHUDText</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_rotate_parent_to_degrees.html">ST_RotateParentToDegrees</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_sector_purge_HUD_add.html">ST_SectorPurgeHUDAdd</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_set_player_special_ability.html">ST_SetPlayerSpecialAbility</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_show_operation_start_hud.html">ST_ShowOperationStartHUD</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_simple_dialog.html">ST_SimpleDialog</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_slow_messages.html">ST_SlowMessages</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_stop_player_and_look_at_parent.html">ST_StopPlayerAndLookAtParent</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_subtract_list.html">ST_SubtractList</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_switcher.html">ST_Switcher</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_switch_npc_logic_enabled.html">ST_SwitchNPCLogicEnabled</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_switch_parent_button.html">ST_SwitchParentButton</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_switch_parent_npc_spawn.html">ST_SwitchParentNPCSpawn</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_switch_parent_trigger.html">ST_SwitchParentTrigger</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_switch_prop_collisions.html">ST_SwitchPropCollisions</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_task.html">ST_Task</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_task_point.html">ST_TaskPoint</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_teleport_player.html">ST_TeleportPlayer</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_timer_condition.html">ST_TimerCondition</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_timer_countdown_hud.html">ST_TimerCountdownHUD</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_toggle_button_on_event.html">ST_ToggleButtonOnEvent</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_tutorial_hud.html">ST_TutorialHUD</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_unlock_achievement.html">ST_UnlockAchievement</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_update_reflection_probe.html">ST_UpdateReflectionProbe</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_use_loadout.html">ST_UseLoadout</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_use_loadout_item.html">ST_UseLoadoutItem</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_value_check_bool.html">ST_ValueCheckBool</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_value_set_bool.html">ST_ValueSetBool</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_waves.html">ST_Waves</a>
<a class="sidebar-class class-node" href="../../modules/script_toolkit/docs/scripts/st_world_env_change_environment.html">ST_WorldEnvChangeEnvironment</a>
<a class="sidebar-class class-resource" href="../../modules/script_toolkit/docs/scripts/st_dialog_messages_data.html">ST_DialogMessagesData</a>
<a class="sidebar-class class-resource" href="../../modules/script_toolkit/docs/scripts/st_wave_data.html">STWaveData</a>
</div><a class="sidebar-class module-var" href="../../modules/sound/docs/index.html">sound<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/sound/docs/scripts/remove_sound_on_finish.html">remove_sound_on_finish</a>
<a class="sidebar-class class-node" href="../../modules/sound/docs/scripts/location_sound.html">LocationSound</a>
<a class="sidebar-class class-node" href="../../modules/sound/docs/scripts/location_sound_2D.html">LocationSound2D</a>
<a class="sidebar-class class-node" href="../../modules/sound/docs/scripts/sound.html">Sound</a>
<a class="sidebar-class" href="../../modules/sound/docs/scripts/reverb_system.html">ReverbSystem</a>
</div><a class="sidebar-class module-var" href="../../modules/soundscape/docs/index.html">soundscape<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/soundscape/docs/scripts/soundscape.html">Soundscape</a>
<a class="sidebar-class class-node" href="../../modules/soundscape/docs/scripts/soundscape_player.html">SoundscapePlayer</a>
<a class="sidebar-class class-resource" href="../../modules/soundscape/docs/scripts/looped_sound.html">SoundscapeLoopedSound</a>
<a class="sidebar-class class-resource" href="../../modules/soundscape/docs/scripts/random_sounds.html">SoundscapeRandomSounds</a>
<a class="sidebar-class class-resource" href="../../modules/soundscape/docs/scripts/reverb_data.html">SoundscapeReverbData</a>
<a class="sidebar-class class-resource" href="../../modules/soundscape/docs/scripts/soundscape_class.html">SoundscapeClass</a>
</div><a class="sidebar-class module-var" href="../../modules/spatial_add_transform/docs/index.html">spatial_add_transform<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/spatial_add_transform/docs/scripts/manager.html">SpatialAddTransformManager</a>
<a class="sidebar-class" href="../../modules/spatial_add_transform/docs/scripts/data.html">SpatialAddTransformData</a>
</div><a class="sidebar-class module-var" href="../../modules/spatial_ubershader/docs/index.html">spatial_ubershader<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/spatial_ubershader/docs/scripts/spatial_ubershader.html">SpatialUbershader</a>
<a class="sidebar-class class-node" href="../../modules/spatial_ubershader/docs/scripts/spatial_ubershader_shaders.html">SpatialUbershaderShaders</a>
<a class="sidebar-class class-resource" href="../../modules/spatial_ubershader/docs/scripts/effect_config.html">SpatialUbershaderEffectConfig</a>
<a class="sidebar-class" href="../../modules/spatial_ubershader/docs/scripts/user_spatial_ubershader.html">UserSpatialUbershader</a>
<a class="sidebar-class class-other" href="../../modules/spatial_ubershader/docs/scripts/code_generator.html">code_generator</a>
</div><a class="sidebar-class module-var" href="../../modules/spectator_camera/docs/index.html">spectator_camera<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/spectator_camera/docs/scripts/spectator_camera.html">SpectatorCamera</a>
</div><a class="sidebar-class module-var" href="../../modules/static_body_combiner/docs/index.html">static_body_combiner<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/static_body_combiner/docs/scripts/sbc_surface_data.html">SBCSurfaceData</a>
<a class="sidebar-class class-node" href="../../modules/static_body_combiner/docs/scripts/static_body_combiner.html">StaticBodyCombiner</a>
</div><a class="sidebar-class module-var" href="../../modules/surface_data/docs/index.html">surface_data<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/surface_data/docs/scripts/surface_debris.html">surface_debris</a>
<a class="sidebar-class class-node" href="../../modules/surface_data/docs/scripts/surface_particle.html">surface_particle</a>
<a class="sidebar-class class-node" href="../../modules/surface_data/docs/scripts/surface_particles_preloader.html">SurfaceParticlesPreloader</a>
<a class="sidebar-class class-node" href="../../modules/surface_data/docs/scripts/surface_type_detector.html">SurfaceTypeDetector</a>
<a class="sidebar-class class-resource" href="../../modules/surface_data/docs/scripts/surface_data_assets.html">SurfaceDataAssets</a>
<a class="sidebar-class class-resource" href="../../modules/surface_data/docs/scripts/surface_material_data.html">SurfaceMaterialData</a>
<a class="sidebar-class class-resource" href="../../modules/surface_data/docs/scripts/surface_material_data_type.html">SurfaceMaterialDataType</a>
<a class="sidebar-class" href="../../modules/surface_data/docs/scripts/surface_data.html">SurfaceData</a>
</div><a class="sidebar-class module-var" href="../../modules/task_location_point/docs/index.html">task_location_point<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/task_location_point/docs/scripts/task_points.html">TaskPoints</a>
<a class="sidebar-class class-node" href="../../modules/task_location_point/docs/scripts/task_point_data.html">task_point_data</a>
</div><a class="sidebar-class module-var" href="../../modules/texture_changer/docs/index.html">texture_changer<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/texture_changer/docs/scripts/texture_changer_server.html">TextureChangerServer</a>
<a class="sidebar-class" href="../../modules/texture_changer/docs/scripts/texture_resource.html">TextureResource</a>
</div><a class="sidebar-class module-var" href="../../modules/time_scale_manager/docs/index.html">time_scale_manager<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/time_scale_manager/docs/scripts/time_scale_manager.html">TimeScaleManager</a>
</div><a class="sidebar-class module-var" href="../../modules/trigger_base/docs/index.html">trigger_base<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/trigger_base/docs/scripts/trigger_base.html">TriggerBase</a>
</div><a class="sidebar-class module-var" href="../../modules/usable/docs/index.html">usable<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class" href="../../modules/usable/docs/scripts/usable.html">Usable</a>
<a class="sidebar-class" href="../../modules/usable/docs/scripts/usable_link.html">UsableLink</a>
</div><a class="sidebar-class module-var" href="../../modules/usable_showup/docs/index.html">usable_showup<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/usable_showup/docs/scripts/usable_showup.html">UsableShowup</a>
</div><a class="sidebar-class module-var" href="../../modules/utilities/docs/index.html">utilities<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/utilities/docs/scripts/utilities.html">Utilities</a>
</div><a class="sidebar-class module-var" href="../../modules/values/docs/index.html">values<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/values/docs/scripts/values.html">Values</a>
</div><a class="sidebar-class module-var" href="../../modules/version/docs/index.html">version<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/version/docs/scripts/version_HUD.html">Version(UD</a>
<a class="sidebar-class class-resource" href="../../modules/version/docs/scripts/version_data.html">VersionData</a>
</div><a class="sidebar-class module-var" href="../../modules/viewmodel/docs/index.html">viewmodel<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/viewmodel/docs/scripts/viewmodel_sight_2D.html">ViewmodelSight2D</a>
<a class="sidebar-class class-node" href="../../modules/viewmodel/docs/scripts/animation_key_methods.html">ViewmodelAnimationKeyMethods</a>
<a class="sidebar-class class-node" href="../../modules/viewmodel/docs/scripts/remove_object_in_seconds.html">remove_object_in_seconds</a>
<a class="sidebar-class class-node" href="../../modules/viewmodel/docs/scripts/remove_sound_after_seconds.html">remove_sound_after_seconds</a>
<a class="sidebar-class class-node" href="../../modules/viewmodel/docs/scripts/weapon_casing_logic.html">weapon_casing_logic</a>
<a class="sidebar-class class-node" href="../../modules/viewmodel/docs/scripts/preloader.html">ViewmodelPreloader</a>
<a class="sidebar-class class-resource" href="../../modules/viewmodel/docs/scripts/animation_event_data.html">ViewmodelAnimationEventData</a>
<a class="sidebar-class class-resource" href="../../modules/viewmodel/docs/scripts/config.html">ViewmodelConfig</a>
<a class="sidebar-class" href="../../modules/viewmodel/docs/scripts/animation_set.html">ViewmodelAnimationSet</a>
<a class="sidebar-class" href="../../modules/viewmodel/docs/scripts/assault_rifle.html">assault_rifle</a>
<a class="sidebar-class" href="../../modules/viewmodel/docs/scripts/generic.html">generic</a>
<a class="sidebar-class" href="../../modules/viewmodel/docs/scripts/grenade.html">grenade</a>
<a class="sidebar-class" href="../../modules/viewmodel/docs/scripts/melee.html">melee</a>
<a class="sidebar-class" href="../../modules/viewmodel/docs/scripts/pump_shotgun.html">pump_shotgun</a>
<a class="sidebar-class" href="../../modules/viewmodel/docs/scripts/model_instance.html">ViewmodelModelInstance</a>
<a class="sidebar-class" href="../../modules/viewmodel/docs/scripts/procedural_animation.html">ViewmodelProceduralAnimation</a>
<a class="sidebar-class" href="../../modules/viewmodel/docs/scripts/viewmodel.html">Viewmodel</a>
</div><a class="sidebar-class module-var" href="../../modules/voicelines/docs/index.html">voicelines<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/voicelines/docs/scripts/voicelines.html">Voicelines</a>
</div><a class="sidebar-class module-var" href="../../modules/window_control/docs/index.html">window_control<button onclick="event.preventDefault();toggleModule(this)" class="module-toggle-btn">-</button></a><div class="module-container">
<a class="sidebar-class class-node" href="../../modules/window_control/docs/scripts/window_control.html">WindowControl</a>
</div><div class="sidebar-empty-space"></div>
    `

    const searchBar = document.querySelector('.searchbar');
    var sidebarLinks = document.querySelectorAll('.sidebar-content a');
    //sidebarLinks = Array.from(sidebarLinks).reverse();

    function onSearch() {
        setCookie("searchbarWords", searchBar.value, 1);
        const filter = searchBar.value.toLowerCase();

        var previousClassLink;
        var prevVarsList = [];
        sidebarLinks.forEach(link => {
            const text = link.textContent.toLowerCase();
            if (link.classList.contains('sidebar-class')) {
                previousClassLink = link;
                prevVarsList = [];
                if (text.includes(filter) || (text == "")) {
                    link.style.display = '';
                    // Show all sibling <a> elements with class "sidebar-var"
                    //document.querySelectorAll('.sidebar-content .sidebar-var').forEach(varLink => {
                    //    varLink.style.display = '';
                    //});
                } else {
                    link.style.display = 'none';
                }
            } else if (link.classList.contains('sidebar-var')) {
                prevVarsList.push(link);
                if (text.includes(filter) || (text == "")) {
                    link.style.display = '';
                    // Show the previous sibling <a> element with class "sidebar-class"
                    if (previousClassLink && previousClassLink.classList.contains('sidebar-class')) {
                        previousClassLink.style.display = '';
                        //prevVarsList.forEach(prevLink => {
                        //    prevLink.style.display = '';
                        //});
                    }
                } else {
                    link.style.display = 'none';
                }
            } else {
                link.style.display = 'none';
            }
        });

        const moduleContainers = document.querySelectorAll('.module-container');
        moduleContainers.forEach(classesContainer => {
            if (filter != "") {
                let hasVisible = false;
                [... classesContainer.children].forEach(child => {
                    if(child.style.display == '') {
                        hasVisible = true;
                    }
                });
                if (hasVisible) {
                    classesContainer.style.display = 'flex';
                    classesContainer.previousElementSibling.style.display = '';
                } else {
                    classesContainer.style.display = 'none';
                    classesContainer.previousElementSibling.style.display = 'none';
                }
            } else {
                let lastStatus = getCookie(getElementPath(classesContainer));
                if(lastStatus === null) {
                    lastStatus = 'none';
                }
                classesContainer.style.display = lastStatus;
            }
        });
    }

    searchBar.addEventListener('input', onSearch);
    searchBar.value = getCookie("searchbarWords");

    // Highlighting current selection

    var sidebarClasses = document.querySelectorAll('.sidebar-class');
    sidebarClasses.forEach((selection) => {
        let partHref = selection.getAttribute('href');
        partHref = partHref.split("index")[0]
        partHref = partHref.replace(/\.\.\//g, "");
        let windowHref = window.location.href
        windowHref = windowHref.split("index")[0]
        if(windowHref.indexOf(partHref) !== -1) {
            selection.className = "sidebar-current " + selection.className;
        }
    });

    // Maximizing images

    // Create overlay elements
    const overlay = document.createElement('div');
    overlay.id = 'imageOverlay';
    overlay.className = 'image-overlay';
    overlay.onclick = minimizeImage;

    const closeButton = document.createElement('span');
    closeButton.className = 'close-button';
    closeButton.innerHTML = '&times;';

    const maximizedImg = document.createElement('img');
    maximizedImg.id = 'maximizedImage';
    maximizedImg.className = 'maximized-image';
    maximizedImg.onclick = function(e) { e.stopPropagation(); };

    // Assemble and add to DOM
    overlay.appendChild(closeButton);
    overlay.appendChild(maximizedImg);
    document.body.appendChild(overlay);

    // Hide contents of modules by default
    const moduleContainers = document.querySelectorAll('.module-container');
    moduleContainers.forEach(classesContainer => {
        let lastStatus = getCookie(getElementPath(classesContainer));
        if(lastStatus === null) {
            lastStatus = 'none';
        }
        classesContainer.style.display = lastStatus;
    });

    setTimeout(() => {
        onSearch();
    }, 20);

    setTimeout(() => {
        // Restore position of scrollbar
        var content = document.querySelector('.sidebar-content');
        content.addEventListener('scroll', function() {
            localStorage.setItem('scrollPosition', content.scrollTop);
            setCookie('scrollPosition', content.scrollTop, 1);
        });

        const scrollPosition = getCookie('scrollPosition');
        if (scrollPosition !== null) {
            content.scrollTop = parseInt(scrollPosition, 10);
        }
    }, 30);
});
