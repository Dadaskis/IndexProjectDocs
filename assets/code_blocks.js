document.addEventListener('DOMContentLoaded', function() {
    const codeElements = document.querySelectorAll('.gdscript');

    // GDScript keyword lists
    const keywords = [
        'extends', 'class_name', 'var', 'const', 'func', 'return',
        'if', 'elif', 'else', 'for', 'while', 'match', 'break',
        'continue', 'pass', 'self', 'signal', 'static', 'await', 'void',
        'in', 'funcref', 'export', 'true', 'false', 'tool', 'null'
    ];

    const builtins = [
        // Core types
        'print', 'Vector2', 'Vector3', 'Color', 'Array', 'Dictionary',
        'Node', 'Object', 'int', 'float', 'String', 'bool', 'Rect2',
        'Transform', 'Transform2D', 'Plane', 'Quat', 'AABB', 'Basis',
        'RID', 'PoolByteArray', 'PoolIntArray', 'PoolRealArray', 'PoolStringArray',
        'PoolVector2Array', 'PoolVector3Array', 'PoolColorArray', 'Resource',

        // 2D Nodes
        "Node2D", "Sprite", "AnimatedSprite", "Position2D", "CollisionShape2D",
        "CollisionPolygon2D", "Area2D", "StaticBody2D", "RigidBody2D",
        "KinematicBody2D", "TileMap", "ParallaxLayer", "ParallaxBackground",
        "Polygon2D", "Line2D", "RayCast2D", "Light2D", "LightOccluder2D",
        "VisibilityNotifier2D", "Camera2D", "RemoteTransform2D", "YSort",
        "BackBufferCopy", "TouchScreenButton", "CanvasModulate", "Listener2D",
        "Skeleton2D", "Bone2D", "PhysicsBody2D", "Joint2D",

        // 3D Nodes
        "Spatial", "Camera", "MeshInstance", "ImmediateGeometry",
        "MultiMeshInstance", "AnimationPlayer", "AnimatedSprite3D",
        "OmniLight", "SpotLight", "DirectionalLight", "Position3D",
        "BoneAttachment", "Portal", "Room", "RoomManager", "ProximityGroup",
        "Label3D", "BakedLightmap", "CPUParticles", "Particles", "Area",
        "ReflectionProbe", "Occluder", "StaticBody", "RigidBody",
        "KinematicBody", "CollisionShape", "CollisionPolygon",
        "NavigationMeshInstance", "GIProbe", "VisibilityNotifier",
        "RemoteTransform", "SpringArm", "VehicleBody", "VehicleWheel",
        "SoftBody", "ARVRCamera", "ARVROrigin", "ARVRAnchor",
        "PhysicsBody", "Joint", "PinJoint", "HingeJoint", "SliderJoint",
        "ConeTwistJoint", "Generic6DOFJoint",

        // UI Nodes
        "Control", "Panel", "Label", "LineEdit", "TextEdit", "TextureRect",
        "NinePatchRect", "TextureButton", "ColorRect", "Button", "CheckBox",
        "CheckButton", "OptionButton", "MenuButton", "LinkButton",
        "PanelContainer", "ScrollContainer", "MarginContainer",
        "CenterContainer", "HBoxContainer", "VBoxContainer", "GridContainer",
        "SplitContainer", "TabContainer", "Tabs", "RichTextLabel",
        "ProgressBar", "Slider", "HSlider", "VSlider", "SpinBox",
        "HSeparator", "VSeparator", "TextureProgress", "VideoPlayer",
        "GraphEdit", "GraphNode", "Tree", "ItemList", "Popup",
        "PopupMenu", "PopupPanel", "WindowDialog", "AcceptDialog",
        "ConfirmationDialog", "FileDialog", "ColorPicker", "ColorPickerButton",

        // Audio Nodes
        "AudioStreamPlayer", "AudioStreamPlayer2D", "AudioStreamPlayer3D",
        "AudioListener", "AudioListener2D", "AudioEffectCapture",
        "AudioBusLayout", "AudioEffect", "AudioEffectEQ", "AudioEffectFilter",
        "AudioEffectDelay", "AudioEffectReverb", "AudioEffectChorus",
        "AudioEffectCompressor", "AudioEffectDistortion", "AudioEffectPitchShift",

        // Animation Nodes
        "AnimationTree", "AnimationNodeStateMachine", "AnimationNodeBlendTree",
        "AnimationTreePlayer", "SkeletonIK", "AnimationNode",
        "AnimationNodeAnimation", "AnimationNodeBlendSpace1D",
        "AnimationNodeBlendSpace2D", "AnimationNodeBlend2",
        "AnimationNodeBlend3", "AnimationNodeTimeScale",
        "AnimationNodeTimeSeek", "AnimationNodeTransition",

        // Physics Nodes
        "GrooveJoint2D", "DampedSpringJoint2D", "Navigation",
        "Navigation2D", "Path", "Path2D", "PathFollow", "PathFollow2D",
        "Particles2D", "CPUParticles2D", "Skeleton", "PhysicalBone",

        // Environment Nodes
        "WorldEnvironment", "ProxyTexture", "ShaderMaterial",
        "VisualShader", "VisualScript", "ResourcePreloader",
        "Timer", "Tween", "HTTPRequest", "EditorPlugin",
        "EditorInspector", "ScriptEditor", "EditorFileSystem",
        "EditorFileDialog", "EditorSettings", "EditorInterface",

        // Resources
        "Resource", "Image", "Texture", "ViewportTexture",
        "Curve", "Curve2D", "Curve3D", "Font", "DynamicFont",
        "BitmapFont", "StyleBox", "Theme", "Mesh", "Material",
        "Shader", "ParticlesMaterial", "SpatialMaterial",
        "Environment", "World", "Script", "GDScript",
        "CSharpScript", "PluginScript", "NativeScript",
        "InputEvent", "InputMap", "JSONParseResult",
        "ConfigFile", "File", "Directory", "Mutex",
        "Semaphore", "Thread", "TCP_Server", "PacketPeer",
        "StreamPeer", "WebSocketClient", "WebSocketServer",
        "PackedSceneGLTF",

        // Singletons
        "Engine", "OS", "Performance", "ProjectSettings",
        "Input", "InputMap", "TranslationServer", "VisualServer",
        "AudioServer", "PhysicsServer", "Physics2DServer",
        "NavigationServer", "ARVRServer", "ClassDB"
    ];

    const custom = ["Achievements", "AchievementData", "AchievementUnlockedDisplay", "RichTextMatrix", "RichTextRandHEX", "BulletData", "BulletSystem", "RaycastBulletSystem", "Character", "CharacterDamagable", "CharacterList", "Factions", "FactionsInitData", "CharacterSpecialAbility", "CharacterBuilderUtilities", "CB_MaterialExportData", "CB_SavedCharacter", "CB_CharacterDetail", "CB_CharacterPart", "Checkpoints", "CheckpointData", "ColorGrading", "ComicsData", "ComicsPageData", "ComicsPictureData", "ComicsPlayer", "ComicsTextBoxData", "ComicsRendererControl", "ComicSceneFile", "CE_PropertiesData", "ConsoleCommands", "CursorControl", "BasicDamagable", "Damagable", "DamagableLink", "DamagableList", "DamageTrigger", "DamagableReasons", "DebrisControl", "DebugDraw", "DevBinds", "DevMenu", "DevText", "DialogTreeAnswer", "DialogTreeChoice", "DialogTree", "DialogTreeEnding", "DialogTreeOption", "DialogTreeStart", "DiscordGameRpc", "GenerateDocs", "DocInfo", "DocInfoSaver", "DynamicWeatherConfig", "DynamicWeatherData", "DynamicWeatherManager", "DynamicWeatherPreset", "ResourceStreamer", "StreamedProperty", "Electrowave", "EventManager", "Explosion", "ExplosionAreas", "ExplosionParticlePreloader", "ExplosionProps", "FirearmGrenade", "FirearmGrenadeAreas", "FlareFire", "Flashbang", "Footstep", "FootstepSoundsData", "GameMenu", "GameNewsData", "GameNewsList", "GameStartAutoloadInit", "GameVideo", "GammaCorrection", "Gas", "GlitchCameraScenery", "Globals", "GoreSystemGibs", "GraphicsControl", "GravityControl", "Grenade", "GrenadeLogicBase", "GrenadeModels", "BasicGrenadeLogic", "FlashGrenadeLogic", "FragGrenadeLogic", "GasGrenadeLogic", "TeleporterGrenadeLogic", "AmmoHUD", "BossHUD", "CrosshairHUD", "DangerIndicatorHUD", "FaderHUD", "HealthHUD", "ItemsHUDItemUI", "ItemsHUD", "ItemsHUDItemData", "LoadoutExpHUD", "LoadoutWeaponHUD", "LocationTutorialHUD", "MessagePartHUD", "MessageHUD", "MissionFailedHUD", "MissionStatusHUD", "OperationStartHUD", "PlotMessageHUD", "PlotTellHUD", "ResourceHUD", "TasksHUD", "TimerCountdownHUD", "TutorialHUD", "HeadsUpDisplay", "HitBody", "HitBodyProperty", "HitBodyTool", "HumanModelFileArchive", "RagdollList", "HumanModelFootMark", "HumanModelFootstepAnimMark", "HumanModelFootstepMarks", "HumanWeaponConfig", "HumanModelAnimEventCaller", "HumanModel", "KillCamManager", "LaserSight", "LimitDataCollector", "LoadoutArmorItem", "LoadoutItemDataBase", "LoadoutOperationItem", "LoadoutPerkItem", "LoadoutSpecialDeviceItem", "LoadoutWeaponItem", "LoadoutLogicBase", "LoadoutSelection", "LoadoutSystem", "LoadoutPresentation", "Localization", "LocationBlockout", "LocationBlockoutFast", "LocationBlockoutMaterialConfig", "LocationBlockoutMesh", "LocationCollisionData", "LocationCollisionDict", "LocationModelTool", "LocationPart", "LocationPhysics", "LocationPhysicsData", "LocationPhysicsGlobal", "LocationPortal", "LocationPrefab", "LocationProp", "LocationProps", "LocationPropConfig", "LocationPropFileArchive", "LocationShaderCompileView", "LocationBaseCombiner", "LocationBaseCombinerPart", "LoadingScreenData", "LoadingScreenNotes", "LoadingScreenNotesData", "LocationChanger", "LocationChunk", "LocationChunkManager", "LocationCutscene", "LocationCutsceneData", "LocationCutscenePlayer", "LocationDecal", "LocationDecalRemover", "LocationDecalMesh", "LocationDecalMeshCombiner", "LocationDecalMeshDefaults", "LocationDustMotes", "LocationFire", "FireGlobal", "LocationGenerator", "LocGenCellData", "LocGenLocationData", "LocGenPrefabData", "LocationLightVolume", "LocationLOD", "ViewportTextureRender", "BaseScene", "LocationEvents", "LocationBase", "LocationButtonTrigger", "LocationButtonTriggerCube", "LocationButtonTriggerUsable", "ExitTrigger", "LocationLogicBase", "LocationTrigger", "LocationTriggerCube", "LocationMeshCombiner", "LocationMeshCombinerCube", "LocationParticlePoint", "LocationShaderCompile", "LocationSkyClouds", "LocationSmoke", "LocationSprite", "LocationTutorial", "LocationTutorialView", "LocationZone", "MainCamera", "MainMenuCamera", "ModSupport", "Music", "NPCAttackQueue", "NPCMaxDistanceManager", "NPCNames", "NPCPositionQueue", "NPCSpawnQueue", "NPCVisionQueue", "NPCBaseScript", "NPCCharacterData", "NPCHitboxDamageMultiplier", "NPCHitboxData", "NPCWeaponConfig", "NPCLogic", "NPCSpawn", "NPCPatrolPointHint", "NonPlayableCharacter", "NPCPathfinding", "_Citizen_ActPlaying", "_Citizen_AttackPlayer", "_Citizen_None", "_Citizen_Panic", "_Citizen_PanicAnim", "_Citizen_Patrol", "_HeavyUnit_Attack", "_HeavyUnit_AttackPlayer", "_HeavyUnit_FollowAttack", "_HeavyUnit_None", "_HeavyUnit_Patrol", "_HeavyUnit_StandAndShoot", "_HeavyUnit_StandAndShootPlayer", "_HeavyUnit_TestLook", "_HeavyUnit_WaitEnemy", "_LightUnit_Attack", "_LightUnit_AttackPlayer", "_LightUnit_FollowAttack", "_LightUnit_None", "_LightUnit_Patrol", "_LightUnit_StandAndShoot", "_LightUnit_StandAndShootPlayer", "_LightUnit_TestLook", "_LightUnit_WaitEnemy", "NPCLogicState", "NPCBaseScriptHuman", "NPCHumanWeaponHandler", "NPCLogicStateHuman", "NPCHuman", "OcclusionCullingBakeData", "OcclusionCullingChunkData", "CullChunk", "CullChunkKnife", "CullView", "OcclusionCulling", "PlayerData", "PCWaterList", "PlayerStats", "PlayerMouseLook", "PlayerControllerLadder", "PlayerSpawn", "PlayerTeleportPos", "PlayerControllerWater", "PlayerCameraMotion", "PlayerController", "PlayerStateDebugFly", "PlayerStateLadder", "PlayerStateWalk", "PlayerStateWater", "PlayerStatsAdder", "PlayerWeaponHandler", "PlayerWeapon", "PlayerBuildingWeapon", "PlayerFirearmBioWeapon", "PlayerFirearmElectroWeapon", "PlayerFirearmFlashWeapon", "PlayerFirearmWeapon", "PlayerGrenadeWeapon", "PlayerAnimatedItem", "PlayerAnimatedItemMedical", "PlayerMeleePickaxeWeapon", "PlayerMeleeWeapon", "PlayerWeaponSystem", "ArmorHelmetPostProcessing", "ArmorHelmetBreakPostProcessing", "BlackDebugPostProcessing", "CornerColorPostProcessing", "DrugEffectPostProcessing", "DrugRGBPostProcessing", "FlashbangPostProcessing", "FlashbangBlurPostProcessing", "HCSSOutlinePostProcessing", "HitmanPostProcessing", "LowHPPostProcessing", "MotionBlurPostProcessing", "NightVisionPostProcessing", "SpecialAbilityOverlayPostProcessing", "SSAOPostProcessing", "SuppressionPostProcessing", "UnderwaterPostProcessing", "VignettePostProcessing", "PostProcessingBase", "PostProcessingSystem", "DialogLogicBase", "PreMissionDialog", "RoomDebug", "SceneChanger", "COM_BakedLightmap", "COM_BakedLightConfig", "COM_DynamicWeatherNightOnly", "COM_LevelTransition", "COM_LevelTransitionLoadout", "COM_LocationEnvBlend", "COM_MainMenu", "COM_MovingSound", "COM_OmnilightOptimizer", "COM_PropAchievementFind", "COM_PropButton", "COM_PropConsumable", "COM_PropDigResource", "COM_PropDoorMoving", "COM_PropDoorRotating", "COM_PropExpBriefcase", "COM_PropLoadoutItem", "COM_PropLootableResources", "COM_PropMachineGun", "COM_PropMachineGunExplosive", "COM_PropRotating", "COM_PropStack", "COM_PropTeleportDoor", "COM_PropTurret", "COM_PropUsableItem", "COM_PropWeapon", "COM_SurfaceParticle", "PropDigResourceHit", "PropDoorRotatingHit", "ST_ActivateKillcam", "ST_AnimationPlayerMethodCaller", "ST_AnyNPCKilled", "ST_Battlefield", "ST_ChanceEvent", "ST_ChangeColorGradingLUT", "ST_ChangeFactionRelationship", "ST_ChangeLocation", "ST_ChangeNPCLogicState", "ST_ChangeNPCLogicStateOnTrigger", "ST_ChangeParentVisibility", "ST_ChangePlayerHands", "ST_ChangePlayerLegs", "ST_ChangePlayerWeapon", "ST_CharacterCountMessage", "ST_CharacterRandomPhrase", "ST_CharacterSayRandom", "ST_CheckpointOnEvent", "ST_CheckEnemyCount", "ST_CheckIfDemo", "ST_CheckIfNamedNPCsAlive", "ST_CheckIfNPCsAlive", "ST_CheckIfTriggerOnSpecialProp", "ST_CheckPropsAmount", "ST_ComicsPlayer", "ST_ControlDrugRGB", "ST_ControlUsableShowup", "ST_DelayedEvent", "ST_DialogMessages", "ST_DialogMessagesData", "ST_DynamicWeatherAssign", "ST_DynamicWeatherRandomize", "ST_DynamicWeatherSet", "ST_EnvMute", "ST_EventIfTaskComplete", "ST_EventOnCheckpointLoad", "ST_EventOnStart", "ST_EventQueue", "ST_EventToOneVisibleNode", "ST_ExplosionOnEvent", "ST_FireController", "ST_GlobalsCheckBool", "ST_GlobalsSetBool", "ST_GravityControl", "ST_HackWaves", "ST_InstanceLocationPrefab", "ST_KillNPC", "ST_LerpLightEnergyOnEvent", "ST_LightColorSineBlend", "ST_LightFlicker", "ST_LoadoutAddExp", "ST_LoadoutAddTempExp", "ST_LoadoutApplyTempExp", "ST_LoadoutResetTempExp", "ST_Message", "ST_MissionStatusHUD", "ST_MoneyChange", "ST_MoneyTrade", "ST_MoneyWallet", "ST_MultipleEvents", "ST_MultipleToOneEvent", "ST_Music", "ST_NPCExitActMode", "ST_NPCOnTriggerCheck", "ST_NPCPlayActAnimationOnce", "ST_NPCPlayActOnOrigin", "ST_NPCSetSightTarget", "ST_NPCSetWalkTarget", "ST_NullifyPropOriginOnTrigger", "ST_OnceOnly", "ST_OneNodeWhitelist", "ST_PlayerAmmoPickup", "ST_PlayerCheckWeapons", "ST_PlayerFallAnim", "ST_PlayerInteractionFake", "ST_PlayerLockControls", "ST_PlayerLowHeightPosCheck", "ST_PlayerMoveMult", "ST_PlayerNightVisionControl", "ST_PlayerSetHealth", "ST_PlayerStealItems", "ST_PlayerStripWeapons", "ST_PlayerWeaponTakeAnim", "ST_Play2DSound", "ST_PlayParentAnimationPlayer", "ST_PlotTellHUD", "ST_PropsFullList", "ST_PropAnimOnEvent", "ST_PropDestroyOnEvent", "ST_PropMedkit", "ST_QuickFade", "ST_RandomEvents", "ST_RemoveIfTaskComplete", "ST_RemoveParentInTime", "ST_RemoveParentOnEvent", "ST_RemoveParentPropIfUsed", "ST_RemovePropOnTrigger", "ST_Repeater", "ST_ResourceHUDText", "ST_RotateParentToDegrees", "ST_SectorPurgeHUDAdd", "ST_SetPlayerSpecialAbility", "ST_ShowOperationStartHUD", "ST_SimpleDialog", "ST_SlowMessages", "ST_StopPlayerAndLookAtParent", "ST_SubtractList", "ST_Switcher", "ST_SwitchNPCLogicEnabled", "ST_SwitchParentButton", "ST_SwitchParentNPCSpawn", "ST_SwitchParentTrigger", "ST_SwitchPropCollisions", "ST_Task", "ST_TaskPoint", "ST_TeleportPlayer", "ST_TimerCondition", "ST_TimerCountdownHUD", "ST_ToggleButtonOnEvent", "ST_TutorialHUD", "ST_UnlockAchievement", "ST_UpdateReflectionProbe", "ST_UseLoadout", "ST_UseLoadoutItem", "ST_ValueCheckBool", "ST_ValueSetBool", "ST_Waves", "STWaveData", "ST_WorldEnvChangeEnvironment", "LocationSound", "LocationSound2D", "ReverbSystem", "Sound", "SoundscapeLoopedSound", "SoundscapeRandomSounds", "SoundscapeReverbData", "Soundscape", "SoundscapeClass", "SoundscapePlayer", "SpatialAddTransformData", "SpatialAddTransformManager", "SpatialUbershaderEffectConfig", "SpatialUbershader", "SpatialUbershaderShaders", "UserSpatialUbershader", "SpectatorCamera", "SBCSurfaceData", "StaticBodyCombiner", "SurfaceData", "SurfaceDataAssets", "SurfaceMaterialData", "SurfaceMaterialDataType", "SurfaceParticlesPreloader", "SurfaceTypeDetector", "TaskPoints", "TextureChangerServer", "TextureResource", "TimeScaleManager", "TriggerBase", "Usable", "UsableLink", "UsableShowup", "Utilities", "Values", "VersionData", "VersionUD", "ViewmodelAnimationSet", "ViewmodelSight2D", "ViewmodelAnimationEventData", "ViewmodelConfig", "ViewmodelAnimationKeyMethods", "ViewmodelModelInstance", "ViewmodelPreloader", "ViewmodelProceduralAnimation", "Viewmodel", "Voicelines", "WindowControl", "AssetHelperSelected", "node.get_class", "AssetHelperTypeConfig", "AssetHelperTypeVariable", "DecalKitGizmo", "RichPresence", "RichPresenceButton", "DiscordRPCUtil", "IPCUtil", "URLUtil", "UUID", "EditorColorGrading", "StreamPeerUnix", "Steam", "Steam", "PropKitGizmo", "Console"];

    codeElements.forEach(codeElement => {
        const originalHTML = codeElement.innerHTML;

        // Process line by line to properly handle comments and tags
        const lines = originalHTML.split('<br>');
        let processedHTML = '';

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];

            // Handle the line content (before any potential comment)
            const commentIndex = line.indexOf('#');
            let codePart = commentIndex >= 0 ? line.substring(0, commentIndex) : line;
            let commentPart = commentIndex >= 0 ? line.substring(commentIndex) : '';

            // Process the code part (before comment)
            if (codePart) {
                // Strings
                codePart = codePart.replace(/"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/g, '<span class="string">$&</span>');
                // Numbers
                codePart = codePart.replace(/\b\d+(\.\d+)?\b/g, '<span class="number">$&</span>');

                // Keywords, builtins and custom types
                keywords.forEach(kw => {
                    codePart = codePart.replace(
                        new RegExp('\\b' + kw + '\\b', 'g'),
                        '<span class="keyword">$&</span>'
                    );
                });

                builtins.forEach(bi => {
                    codePart = codePart.replace(
                        new RegExp('\\b' + bi + '\\b', 'g'),
                        '<span class="builtin">$&</span>'
                    );
                });

                custom.forEach(cu => {
                    codePart = codePart.replace(
                        new RegExp('\\b' + cu + '\\b', 'g'),
                        '<span class="custom">$&</span>'
                    );
                });

                // Function declarations
                codePart = codePart.replace(
                    /func\s+(\w+)/g,
                    'func <span class="function">$1</span>'
                );
            }

            // Process the comment part if it exists
            if (commentPart) {
                commentPart = `<span class="comment">${commentPart}</span>`;
            }

            // Combine the parts
            processedHTML += codePart + commentPart;

            // Add <br/> back except after the last line
            if (i < lines.length - 1) {
                processedHTML += '<br/>';
            }
        }

        codeElement.innerHTML = processedHTML;
    });
});
