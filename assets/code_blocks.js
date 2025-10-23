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

    const custom = ["AchievementUnlockedDisplay", "Achievements", "AchievementData", "RichTextMatrix", "RichTextRandHEX", "BulletData", "RaycastBulletSystem", "BulletSystem", "CharacterBuilderUtilities", "CB_MaterialExportData", "CB_SavedCharacter", "CB_CharacterPart", "CB_CharacterDetail", "Factions", "Character", "FactionsInitData", "CharacterDamagable", "CharacterList", "CharacterSpecialAbility", "Checkpoints", "CheckpointData", "ColorGrading", "ComicsPlayer", "ComicsPictureData", "ComicsData", "ComicsPageData", "ComicsTextBoxData", "ComicSceneFile", "ComicsRendererControl", "CE_PropertiesData", "ConsoleCommands", "CursorControl", "DamagableLink", "Damagable", "DamagableList", "DamageTrigger", "DamagableReasons", "BasicDamagable", "DebrisControl", "DebugDraw", "DevBinds", "DevMenu", "DevText", "DialogTree", "DialogTreeOption", "DialogTreeAnswer", "DialogTreeChoice", "DialogTreeStart", "DialogTreeEnding", "DiscordGameRpc", "GenerateDocs", "DocInfoSaver", "DocInfo", "ResourceStreamer", "StreamedProperty", "Electrowave", "EventManager", "ExplosionParticlePreloader", "ExplosionAreas", "ExplosionProps", "Explosion", "FirearmGrenadeAreas", "FirearmGrenade", "FlareFire", "Flashbang", "FootstepSoundsData", "Footstep", "GameMenu", "GameNewsList", "GameNewsData", "GameStartAutoloadInit", "GameVideo", "GammaCorrection", "Gas", "Globals", "GoreSystemGibs", "GraphicsControl", "GravityControl", "BasicGrenadeLogic", "FragGrenadeLogic", "FlashGrenadeLogic", "GasGrenadeLogic", "TeleporterGrenadeLogic", "GrenadeModels", "Grenade", "GrenadeLogicBase", "HeadsUpDisplay", "AmmoHUD", "ItemsHUDItemData", "ItemsHUDItemUI", "ItemsHUD", "DangerIndicatorHUD", "PlotMessageHUD", "TimerCountdownHUD", "PlotTellHUD", "MessagePartHUD", "MessageHUD", "OperationStartHUD", "HealthHUD", "LocationTutorialHUD", "ResourceHUD", "CrosshairHUD", "LoadoutExpHUD", "TutorialHUD", "MissionFailedHUD", "LoadoutWeaponHUD", "TasksHUD", "FaderHUD", "MissionStatusHUD", "HitBody", "HitBodyTool", "HitBodyProperty", "HumanModelFileArchive", "RagdollList", "HumanModel", "HumanModelFootstepAnimMark", "HumanModelFootstepMarks", "HumanModelFootMark", "HumanWeaponConfig", "HumanModelAnimEventCaller", "LaserSight", "LimitDataCollector", "LoadoutItemDataBase", "LoadoutPerkItem", "LoadoutOperationItem", "LoadoutWeaponItem", "LoadoutSpecialDeviceItem", "LoadoutArmorItem", "LoadoutLogicBase", "LoadoutPresentation", "LoadoutSystem", "LoadoutSelection", "Localization", "ViewportTextureRender", "LocationLOD", "LocationBaseCombinerPart", "LocationBaseCombiner", "LocationChanger", "LoadingScreenNotesData", "LoadingScreenData", "LoadingScreenNotes", "LocationChunkManager", "LocationChunk", "LocationDecal", "LocationDecalRemover", "LocationDecalMesh", "LocationDecalMeshCombiner", "LocationDecalMeshDefaults", "LocationDustMotes", "FireGlobal", "LocationFire", "LocGenPrefabData", "LocGenLocationData", "LocationGenerator", "LocGenCellData", "LocationLightVolume", "LocationEvents", "BaseScene", "LocationBase", "LocationButtonTriggerCube", "ExitTrigger", "LocationLogicBase", "LocationButtonTriggerUsable", "LocationTrigger", "LocationTriggerCube", "LocationButtonTrigger", "LocationMeshCombiner", "LocationMeshCombinerCube", "LocationParticlePoint", "LocationShaderCompile", "LocationSkyClouds", "LocationSmoke", "LocationSprite", "LocationTutorialView", "LocationTutorial", "LocationZone", "LocationBlockoutMesh", "LocationProps", "LocationCollisionDict", "LocationPhysicsGlobal", "LocationBlockoutMaterialConfig", "LocationPortal", "LocationShaderCompileView", "LocationProp", "LocationPropFileArchive", "LocationPhysicsData", "LocationPhysics", "LocationBlockoutFast", "LocationPart", "LocationPropConfig", "LocationModelTool", "LocationCollisionData", "LocationBlockout", "MainCamera", "MainMenuCamera", "ModSupport", "Music", "NPCPathfinding", "NPCNames", "NPCAttackQueue", "NPCSpawnQueue", "NPCVisionQueue", "NPCPositionQueue", "NPCMaxDistanceManager", "NPCLogicState", "NPCHitboxData", "NPCWeaponConfig", "NPCHitboxDamageMultiplier", "NPCCharacterData", "NPCBaseScript", "NPCSpawn", "NPCPatrolPointHint", "_LightUnit_FollowAttack", "_LightUnit_Attack", "_LightUnit_TestLook", "_LightUnit_None", "_LightUnit_StandAndShootPlayer", "_LightUnit_WaitEnemy", "_LightUnit_Patrol", "_LightUnit_StandAndShoot", "_LightUnit_AttackPlayer", "_Citizen_None", "_Citizen_PanicAnim", "_Citizen_ActPlaying", "_Citizen_Patrol", "_Citizen_Panic", "_Citizen_AttackPlayer", "_HeavyUnit_FollowAttack", "_HeavyUnit_Attack", "_HeavyUnit_TestLook", "_HeavyUnit_None", "_HeavyUnit_StandAndShootPlayer", "_HeavyUnit_WaitEnemy", "_HeavyUnit_Patrol", "_HeavyUnit_StandAndShoot", "_HeavyUnit_AttackPlayer", "NPCHuman", "NPCLogicStateHuman", "NPCHumanWeaponHandler", "NPCBaseScriptHuman", "NPCLogic", "NonPlayableCharacter", "OcclusionCulling", "OcclusionCullingChunkData", "OcclusionCullingBakeData", "CullView", "CullChunkKnife", "CullChunk", "PlayerCameraMotion", "PlayerWeaponHandler", "PlayerStatsAdder", "PlayerControllerLadder", "PlayerTeleportPos", "PlayerControllerWater", "PlayerSpawn", "PCWaterList", "PlayerStats", "PlayerData", "PlayerMouseLook", "PlayerStateDebugFly", "PlayerStateWater", "PlayerStateLadder", "PlayerStateWalk", "PlayerMain", "PlayerWeaponSystem", "PlayerWeapon", "PlayerFirearmElectroWeapon", "PlayerAnimatedItemMedical", "PlayerFirearmFlashWeapon", "PlayerMeleePickaxeWeapon", "PlayerFirearmBioWeapon", "PlayerGrenadeWeapon", "PlayerFirearmWeapon", "PlayerAnimatedItem", "PlayerMeleeWeapon", "DrugRGBPostProcessing", "HitmanPostProcessing", "HCSSOutlinePostProcessing", "DrugEffectPostProcessing", "SuppressionPostProcessing", "SpecialAbilityOverlayPostProcessing", "SSAOPostProcessing", "CornerColorPostProcessing", "NightVisionPostProcessing", "BlackDebugPostProcessing", "UnderwaterPostProcessing", "ArmorHelmetBreakPostProcessing", "MotionBlurPostProcessing", "FlashbangPostProcessing", "LowHPPostProcessing", "FlashbangBlurPostProcessing", "ArmorHelmetPostProcessing", "VignettePostProcessing", "PostProcessingSystem", "PostProcessingBase", "DialogLogicBase", "PreMissionDialog", "RoomDebug", "SceneChanger", "COM_PropLootableResources", "COM_MovingSound", "COM_PropRotating", "COM_PropLoadoutItem", "COM_PropButton", "COM_PropDoorRotating", "COM_PropDoorMoving", "COM_LevelTransition", "COM_PropExpBriefcase", "COM_PropUsableItem", "COM_PropTeleportDoor", "COM_PropWeapon", "COM_PropDigResource", "COM_PropTurret", "COM_LocationEnvBlend", "COM_PropStack", "COM_BakedLightConfig", "COM_LevelTransitionLoadout", "COM_BakedLightmap", "COM_PropConsumable", "COM_OmnilightOptimizer", "COM_PropMachineGunExplosive", "COM_PropMachineGun", "COM_MainMenu", "PropDigResourceHit", "PropDoorRotatingHit", "COM_PropAchievementFind", "COM_SurfaceParticle", "ST_SwitchParentNPCSpawn", "ST_ChangeNPCLogicState", "ST_MultipleEvents", "ST_TaskPoint", "ST_RandomEvents", "ST_RotateParentToDegrees", "ST_RemovePropOnTrigger", "ST_NullifyPropOriginOnTrigger", "ST_ChangePlayerLegs", "ST_TutorialHUD", "ST_ResourceHUDText", "ST_NPCSetWalkTarget", "ST_WorldEnvChangeEnvironment", "ST_Battlefield", "ST_StopPlayerAndLookAtParent", "ST_SectorPurgeHUDAdd", "ST_LoadoutApplyTempExp", "ST_NPCOnTriggerCheck", "ST_PropMedkit", "ST_ToggleButtonOnEvent", "ST_NPCSetSightTarget", "ST_NPCPlayActAnimationOnce", "ST_GlobalsCheckBool", "ST_LoadoutResetTempExp", "ST_LerpLightEnergyOnEvent", "ST_ValueCheckBool", "ST_PlayerAmmoPickup", "ST_Task", "ST_UseLoadoutItem", "ST_Play2DSound", "ST_SwitchParentTrigger", "ST_ChangeColorGradingLUT", "ST_NPCExitActMode", "ST_PlayerFallAnim", "ST_CheckEnemyCount", "ST_CharacterCountMessage", "ST_UnlockAchievement", "ST_PlayerLockControls", "ST_PlayerMoveMult", "ST_DelayedEvent", "ST_CheckIfTriggerOnSpecialProp", "ST_OnceOnly", "ST_AnyNPCKilled", "ST_RemoveParentPropIfUsed", "ST_EventQueue", "ST_PlayerWeaponTakeAnim", "ST_ComicsPlayer", "ST_RemoveIfTaskComplete", "ST_PlayerStealItems", "ST_EventIfTaskComplete", "ST_Message", "ST_ChangeNPCLogicStateOnTrigger", "ST_Switcher", "ST_ChangePlayerHands", "ST_QuickFade", "ST_ControlDrugRGB", "ST_Music", "ST_LightFlicker", "ST_TimerCountdownHUD", "ST_Repeater", "ST_UseLoadout", "ST_FireController", "ST_LoadoutAddExp", "ST_PlayerInteractionFake", "ST_CheckPropsAmount", "ST_SwitchNPCLogicEnabled", "ST_LightColorSineBlend", "ST_PropAnimOnEvent", "ST_PlayParentAnimationPlayer", "ST_ChangeLocation", "ST_CheckpointOnEvent", "ST_MissionStatusHUD", "ST_RemoveParentOnEvent", "ST_EventOnCheckpointLoad", "ST_CheckIfNPCsAlive", "ST_GlobalsSetBool", "ST_ChangeFactionRelationship", "ST_ShowOperationStartHUD", "ST_PropDestroyOnEvent", "ST_PlayerSetHealth", "ST_SlowMessages", "ST_SubtractList", "ST_PlayerNightVisionControl", "ST_ChangePlayerWeapon", "ST_LoadoutAddTempExp", "ST_UpdateReflectionProbe", "STWaveData", "ST_EnvMute", "ST_NPCPlayActOnOrigin", "ST_PlayerCheckWeapons", "ST_SwitchPropCollisions", "ST_MoneyTrade", "ST_InstanceLocationPrefab", "ST_ChanceEvent", "ST_OneNodeWhitelist", "ST_CharacterSayRandom", "ST_CharacterRandomPhrase", "ST_ExplosionOnEvent", "ST_MoneyChange", "ST_EventToOneVisibleNode", "ST_SimpleDialog", "ST_TeleportPlayer", "ST_ChangeParentVisibility", "ST_ValueSetBool", "ST_SetPlayerSpecialAbility", "ST_GravityControl", "ST_PlayerStripWeapons", "ST_PlotTellHUD", "ST_HackWaves", "ST_PlayerLowHeightPosCheck", "ST_PropsFullList", "ST_KillNPC", "ST_RemoveParentInTime", "ST_ControlUsableShowup", "ST_EventOnStart", "ST_TimerCondition", "ST_MultipleToOneEvent", "ST_CheckIfNamedNPCsAlive", "ST_MoneyWallet", "ST_DialogMessagesData", "ST_DialogMessages", "ST_CheckIfDemo", "ST_SwitchParentButton", "ST_AnimationPlayerMethodCaller", "ST_Waves", "Sound", "LocationSound", "LocationSound2D", "ReverbSystem", "SoundscapePlayer", "Soundscape", "SoundscapeClass", "SoundscapeRandomSounds", "SoundscapeLoopedSound", "SoundscapeReverbData", "SpatialAddTransformManager", "SpatialAddTransformData", "SpatialUbershaderEffectConfig", "UserSpatialUbershader", "SpatialUbershader", "SpatialUbershaderShaders", "SpectatorCamera", "SBCSurfaceData", "StaticBodyCombiner", "SurfaceDataAssets", "SurfaceMaterialData", "SurfaceParticlesPreloader", "SurfaceTypeDetector", "SurfaceData", "SurfaceMaterialDataType", "TaskPoints", "TextureChangerServer", "TextureResource", "TimeScaleManager", "TriggerBase", "Usable", "UsableLink", "UsableShowup", "Utilities", "Values", "VersionData", "VersionUD", "ViewmodelSight2D", "ViewmodelModelInstance", "ViewmodelAnimationKeyMethods", "ViewmodelAnimationSet", "ViewmodelPreloader", "ViewmodelAnimationEventData", "ViewmodelConfig", "Viewmodel", "ViewmodelProceduralAnimation", "Voicelines", "WindowControl", "AssetHelperSelected", "AssetHelperTypeConfig", "AssetHelperTypeVariable", "node.get_class", "DecalKitGizmo", "IPCUtil", "UUID", "URLUtil", "RichPresenceButton", "RichPresence", "DiscordRPCUtil", "EditorColorGrading", "StreamPeerUnix", "Steam", "Steam", "PropKitGizmo", "Console"];

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
