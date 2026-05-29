/* eslint-disable no-void */
import * as v from "valibot";
import { IVersions, IVersionTypes } from "./models/versionTracker/types";
import { IEquals } from "./utils/types";

export const equipments = [
  "barbell",
  "cable",
  "dumbbell",
  "smith",
  "band",
  "kettlebell",
  "bodyweight",
  "leverageMachine",
  "medicineball",
  "ezbar",
  "trapbar",
] as const;

export const exerciseTypes = [
  "abWheel",
  "arnoldPress",
  "aroundTheWorld",
  "backExtension",
  "ballSlams",
  "battleRopes",
  "benchDip",
  "benchPress",
  "benchPressCloseGrip",
  "benchPressWideGrip",
  "bentOverOneArmRow",
  "bentOverRow",
  "bicepCurl",
  "bicycleCrunch",
  "boxJump",
  "boxSquat",
  "bulgarianSplitSquat",
  "burpee",
  "cableCrossover",
  "cableCrunch",
  "cableKickback",
  "cablePullThrough",
  "cableTwist",
  "calfPressOnLegPress",
  "calfPressOnSeatedLegPress",
  "chestDip",
  "chestFly",
  "chestPress",
  "chinUp",
  "clean",
  "cleanandJerk",
  "concentrationCurl",
  "crossBodyCrunch",
  "crunch",
  "cycling",
  "deadlift",
  "deadliftHighPull",
  "declineBenchPress",
  "declineCrunch",
  "deficitDeadlift",
  "ellipticalMachine",
  "facePull",
  "flatKneeRaise",
  "flatLegRaise",
  "frontRaise",
  "frontSquat",
  "gluteBridge",
  "gluteBridgeMarch",
  "gluteKickback",
  "gobletSquat",
  "goodMorning",
  "hackSquat",
  "hammerCurl",
  "handstandPushUp",
  "hangClean",
  "hangSnatch",
  "hangingLegRaise",
  "highKneeSkips",
  "highRow",
  "hipAbductor",
  "hipAdductor",
  "hipThrust",
  "inclineBenchPress",
  "inclineChestFly",
  "inclineChestPress",
  "inclineCurl",
  "inclineRow",
  "invertedRow",
  "isoLateralChestPress",
  "isoLateralRow",
  "jackknifeSitUp",
  "jumpRope",
  "jumpSquat",
  "jumpingJack",
  "kettlebellSwing",
  "kettlebellTurkishGetUp",
  "kippingPullUp",
  "kneeRaise",
  "kneelingPulldown",
  "kneestoElbows",
  "latPulldown",
  "lateralBoxJump",
  "lateralRaise",
  "legExtension",
  "legPress",
  "lunge",
  "lyingLegCurl",
  "mountainClimber",
  "muscleUp",
  "obliqueCrunch",
  "overheadPress",
  "overheadSquat",
  "pecDeck",
  "pendlayRow",
  "pistolSquat",
  "plank",
  "powerClean",
  "powerSnatch",
  "preacherCurl",
  "pressUnder",
  "pullUp",
  "pullover",
  "pushPress",
  "pushUp",
  "reverseCrunch",
  "reverseCurl",
  "reverseFly",
  "reverseGripConcentrationCurl",
  "reverseHyperextension",
  "reverseWristCurl",
  "reverseLunge",
  "reversePlank",
  "romanianDeadlift",
  "rowing",
  "russianTwist",
  "seatedCalfRaise",
  "seatedLegCurl",
  "seatedLegPress",
  "seatedOverheadPress",
  "seatedPalmsUpWristCurl",
  "seatedRow",
  "seatedWideGripRow",
  "shoulderPress",
  "shrug",
  "sideBend",
  "sideCrunch",
  "sideHipAbductor",
  "sideLyingClam",
  "sidePlank",
  "singleLegBridge",
  "singleLegDeadlift",
  "singleLegGluteBridgeBench",
  "singleLegGluteBridgeStraight",
  "singleLegGluteBridgeBentKnee",
  "singleLegHipThrust",
  "sitUp",
  "skullcrusher",
  "snatch",
  "snatchPull",
  "splitSquat",
  "splitJerk",
  "squat",
  "squatRow",
  "standingCalfRaise",
  "stepUp",
  "stiffLegDeadlift",
  "straightLegDeadlift",
  "sumoDeadlift",
  "sumoDeadliftHighPull",
  "superman",
  "tBarRow",
  "thruster",
  "toesToBar",
  "torsoRotation",
  "trapBarDeadlift",
  "tricepsDip",
  "tricepsExtension",
  "tricepsPushdown",
  "uprightRow",
  "vUp",
  "widePullUp",
  "wristCurl",
  "wristRoller",
  "zercherSquat",
] as const;
export const availableMuscles = [
  "Adductor Brevis",
  "Adductor Longus",
  "Adductor Magnus",
  "Biceps Brachii",
  "Brachialis",
  "Brachioradialis",
  "Deltoid Anterior",
  "Deltoid Lateral",
  "Deltoid Posterior",
  "Erector Spinae",
  "Gastrocnemius",
  "Gluteus Maximus",
  "Gluteus Medius",
  "Hamstrings",
  "Iliopsoas",
  "Infraspinatus",
  "Latissimus Dorsi",
  "Levator Scapulae",
  "Obliques",
  "Pectineous",
  "Pectoralis Major Clavicular Head",
  "Pectoralis Major Sternal Head",
  "Quadriceps",
  "Rectus Abdominis",
  "Sartorius",
  "Serratus Anterior",
  "Soleus",
  "Splenius",
  "Sternocleidomastoid",
  "Tensor Fasciae Latae",
  "Teres Major",
  "Teres Minor",
  "Tibialis Anterior",
  "Trapezius Lower Fibers",
  "Trapezius Middle Fibers",
  "Trapezius Upper Fibers",
  "Triceps Brachii",
  "Wrist Extensors",
  "Wrist Flexors",
] as const;

export const availableBodyParts: string[] = [
  "Back",
  "Calves",
  "Chest",
  "Forearms",
  "Hips",
  "Shoulders",
  "Thighs",
  "Upper Arms",
  "Waist",
];

export const exerciseKinds = ["core", "pull", "push", "legs", "upper", "lower"] as const;
export const graphExerciseSelectedTypes = ["weight", "volume"] as const;
export const graphMuscleGroupSelectedTypes = ["volume", "sets"] as const;
export const units = ["kg", "lb"] as const;
export const percentageUnits = ["%"] as const;
export const lengthUnits = ["in", "cm"] as const;
export const historyRecordChange = ["order"] as const;
export const targetTypes = ["target", "lasttime", "platescalculator", "e1rm"] as const;
export const exercisePickerSorts = ["name_asc", "similar_muscles"] as const;

export const screenMuscles: string[] = [
  "shoulders",
  "triceps",
  "back",
  "abs",
  "glutes",
  "hamstrings",
  "quadriceps",
  "chest",
  "biceps",
  "calves",
  "forearms",
];

export const statsWeightDef = ["weight"] as const;
export const statsLengthDef = [
  "neck",
  "shoulders",
  "bicepLeft",
  "bicepRight",
  "forearmLeft",
  "forearmRight",
  "chest",
  "waist",
  "hips",
  "thighLeft",
  "thighRight",
  "calfLeft",
  "calfRight",
] as const;
export const statsPercentageDef = ["bodyfat"] as const;

export const VUnit = v.picklist(units);
export type IUnit = v.InferOutput<typeof VUnit>;

export const VPercentageUnit = v.picklist(percentageUnits);
export type IPercentageUnit = v.InferOutput<typeof VPercentageUnit>;

export const VLengthUnit = v.picklist(lengthUnits);
export type ILengthUnit = v.InferOutput<typeof VLengthUnit>;

export const VExerciseKind = v.picklist(exerciseKinds);
export type IExerciseKind = v.InferOutput<typeof VExerciseKind>;

export const VMuscle = v.picklist(availableMuscles);
export type IMuscle = v.InferOutput<typeof VMuscle>;

export const VBodyPart = v.picklist(availableBodyParts as readonly string[]);
export type IBodyPart = v.InferOutput<typeof VBodyPart>;

export const VBarKey = v.picklist(["barbell", "ezbar", "dumbbell"] as const);
export type IBarKey = v.InferOutput<typeof VBarKey>;

export const VBuiltinEquipment = v.picklist(equipments);
export type IBuiltinEquipment = v.InferOutput<typeof VBuiltinEquipment>;

export const VExercisePickerSort = v.picklist(exercisePickerSorts);
export type IExercisePickerSort = v.InferOutput<typeof VExercisePickerSort>;

export const VExercisePickerScreen = v.picklist(["exercisePicker", "customExercise", "filter", "settings"] as const);
export type IExercisePickerScreen = v.InferOutput<typeof VExercisePickerScreen>;

export const VHistoryRecordChange = v.picklist(historyRecordChange);
export type IHistoryRecordChange = v.InferOutput<typeof VHistoryRecordChange>;

export const VTargetType = v.picklist(targetTypes);
export type ITargetType = v.InferOutput<typeof VTargetType>;

export const VProgressMode = v.picklist(["warmup", "workout"] as const);
export type IProgressMode = v.InferOutput<typeof VProgressMode>;

export const VProgramTag = v.picklist([
  "first-starter",
  "beginner",
  "barbell",
  "dumbbell",
  "intermediate",
  "woman",
  "ppl",
  "hypertrophy",
] as const);
export type IProgramTag = v.InferOutput<typeof VProgramTag>;

export const VGraphExerciseSelectedType = v.picklist(graphExerciseSelectedTypes);
export type IGraphExerciseSelectedType = v.InferOutput<typeof VGraphExerciseSelectedType>;

export const VGraphMuscleGroupSelectedType = v.picklist(graphMuscleGroupSelectedTypes);
export type IGraphMuscleGroupSelectedType = v.InferOutput<typeof VGraphMuscleGroupSelectedType>;

export const VScreenMuscle = v.union([v.picklist(screenMuscles as readonly string[]), v.string()]);
export type IScreenMuscle = v.InferOutput<typeof VScreenMuscle>;

export const VEquipment = v.string();
export type IEquipment = v.InferOutput<typeof VEquipment>;

export const VExerciseId = v.string();
export type IExerciseId = v.InferOutput<typeof VExerciseId>;

export const VWeight = v.object({
  value: v.number(),
  unit: VUnit,
});
export type IWeight = v.InferOutput<typeof VWeight>;

export const VPercentage = v.object({
  value: v.number(),
  unit: VPercentageUnit,
});
export type IPercentage = v.InferOutput<typeof VPercentage>;

export const VLength = v.object({
  value: v.number(),
  unit: VLengthUnit,
});
export type ILength = v.InferOutput<typeof VLength>;

export const VPlate = v.object({
  weight: VWeight,
  num: v.number(),
});
export type IPlate = v.InferOutput<typeof VPlate>;

export const VBars = v.record(v.string(), VWeight);
export type IBars = v.InferOutput<typeof VBars>;

export const VMetaExercises = v.object({
  bodyParts: v.array(VBodyPart),
  targetMuscles: v.array(VMuscle),
  synergistMuscles: v.array(VMuscle),
  sortedEquipment: v.optional(v.array(VEquipment)),
});
export type IMetaExercises = v.InferOutput<typeof VMetaExercises>;

export interface IExerciseType {
  id: IExerciseId;
  equipment?: IEquipment;
}
export const VExerciseType: v.GenericSchema<IExerciseType> = v.object({
  id: VExerciseId,
  equipment: v.optional(VEquipment),
});
const _VExerciseTypeMatches: IEquals<v.InferOutput<typeof VExerciseType>, IExerciseType> = true;
void _VExerciseTypeMatches;

export interface ICustomExercise {
  vtype: "custom_exercise";
  id: IExerciseId;
  name: string;
  isDeleted: boolean;
  meta: IMetaExercises;
  defaultEquipment?: IEquipment;
  types?: IExerciseKind[];
  clonedFrom?: IExerciseType;
  reuseImageFrom?: IExerciseType;
  largeImageUrl?: string;
  smallImageUrl?: string;
}
export const VCustomExercise: v.GenericSchema<ICustomExercise> = v.object({
  vtype: v.literal("custom_exercise"),
  id: VExerciseId,
  name: v.string(),
  isDeleted: v.boolean(),
  meta: VMetaExercises,
  defaultEquipment: v.optional(VEquipment),
  types: v.optional(v.array(VExerciseKind)),
  clonedFrom: v.optional(VExerciseType),
  reuseImageFrom: v.optional(VExerciseType),
  largeImageUrl: v.optional(v.string()),
  smallImageUrl: v.optional(v.string()),
});
const _VCustomExerciseMatches: IEquals<v.InferOutput<typeof VCustomExercise>, ICustomExercise> = true;
void _VCustomExerciseMatches;
export type IAllCustomExercises = Partial<Record<string, ICustomExercise>>;

export interface ISet {
  vtype: "set";
  index: number;
  id: string;
  reps?: number;
  originalWeight?: IWeight | IPercentage;
  weight?: IWeight;
  minReps?: number;
  rpe?: number;
  logRpe?: boolean;
  timestamp?: number;
  isAmrap?: boolean;
  label?: string;
  timer?: number;
  askWeight?: boolean;
  isCompleted?: boolean;
  isUnilateral?: boolean;
  completedRepsLeft?: number;
  completedReps?: number;
  completedWeight?: IWeight;
  completedRpe?: number;
  programSetIndex?: number;
}
export const VSet: v.GenericSchema<ISet> = v.object({
  vtype: v.literal("set"),
  index: v.number(),
  id: v.string(),
  reps: v.optional(v.number()),
  originalWeight: v.optional(v.union([VWeight, VPercentage])),
  weight: v.optional(VWeight),
  minReps: v.optional(v.number()),
  rpe: v.optional(v.number()),
  logRpe: v.optional(v.boolean()),
  timestamp: v.optional(v.number()),
  isAmrap: v.optional(v.boolean()),
  label: v.optional(v.string()),
  timer: v.optional(v.number()),
  askWeight: v.optional(v.boolean()),
  isCompleted: v.optional(v.boolean()),
  isUnilateral: v.optional(v.boolean()),
  completedRepsLeft: v.optional(v.number()),
  completedReps: v.optional(v.number()),
  completedWeight: v.optional(VWeight),
  completedRpe: v.optional(v.number()),
  programSetIndex: v.optional(v.number()),
});
const _VSetMatches: IEquals<v.InferOutput<typeof VSet>, ISet> = true;
void _VSetMatches;

export const VProgramState = v.record(v.string(), v.union([v.number(), VWeight, VPercentage]));
export type IProgramState = v.InferOutput<typeof VProgramState>;

export interface IHistoryEntry {
  vtype: "history_entry";
  exercise: IExerciseType;
  sets: ISet[];
  warmupSets: ISet[];
  index: number;
  id: string;
  programExerciseId?: string;
  state?: IProgramState;
  vars?: IProgramState;
  notes?: string;
  changed?: boolean;
  isSuppressed?: boolean;
  superset?: string;
  updatePrints?: (number | IWeight | IPercentage)[][];
}
export const VHistoryEntry: v.GenericSchema<IHistoryEntry> = v.object({
  vtype: v.literal("history_entry"),
  exercise: VExerciseType,
  sets: v.array(VSet),
  warmupSets: v.array(VSet),
  index: v.number(),
  id: v.string(),
  programExerciseId: v.optional(v.string()),
  state: v.optional(VProgramState),
  vars: v.optional(VProgramState),
  notes: v.optional(v.string()),
  changed: v.optional(v.boolean()),
  isSuppressed: v.optional(v.boolean()),
  superset: v.optional(v.string()),
  updatePrints: v.optional(v.array(v.array(v.union([v.number(), VWeight, VPercentage])))),
});
const _VHistoryEntryMatches: IEquals<v.InferOutput<typeof VHistoryEntry>, IHistoryEntry> = true;
void _VHistoryEntryMatches;

export const VProgramStateMetadataValue = v.object({
  userPrompted: v.optional(v.boolean()),
});
export type IProgramStateMetadataValue = v.InferOutput<typeof VProgramStateMetadataValue>;

export const VProgramStateMetadata = v.record(v.string(), v.optional(VProgramStateMetadataValue));
export type IProgramStateMetadata = v.InferOutput<typeof VProgramStateMetadata>;

export interface IProgramSet {
  repsExpr: string;
  weightExpr: string;
  isAmrap?: boolean;
  rpeExpr?: string;
  minRepsExpr?: string;
  logRpe?: boolean;
  askWeight?: boolean;
  label?: string;
  timerExpr?: string;
}
export const VProgramSet: v.GenericSchema<IProgramSet> = v.object({
  repsExpr: v.string(),
  weightExpr: v.string(),
  isAmrap: v.optional(v.boolean()),
  rpeExpr: v.optional(v.string()),
  minRepsExpr: v.optional(v.string()),
  logRpe: v.optional(v.boolean()),
  askWeight: v.optional(v.boolean()),
  label: v.optional(v.string()),
  timerExpr: v.optional(v.string()),
});
const _VProgramSetMatches: IEquals<v.InferOutput<typeof VProgramSet>, IProgramSet> = true;
void _VProgramSetMatches;

export const VProgramExerciseVariation = v.object({
  sets: v.array(VProgramSet),
  quickAddSets: v.optional(v.boolean()),
});
export type IProgramExerciseVariation = v.InferOutput<typeof VProgramExerciseVariation>;

export const VProgramExerciseWarmupSet = v.object({
  reps: v.number(),
  value: v.union([VWeight, v.number()]),
  threshold: VWeight,
});
export type IProgramExerciseWarmupSet = v.InferOutput<typeof VProgramExerciseWarmupSet>;

export const VProgramExerciseReuseLogic = v.object({
  selected: v.optional(v.string()),
  states: v.record(v.string(), VProgramState),
});
export type IProgramExerciseReuseLogic = v.InferOutput<typeof VProgramExerciseReuseLogic>;

export interface IProgramExercise {
  exerciseType: IExerciseType;
  id: string;
  name: string;
  variations: v.InferOutput<typeof VProgramExerciseVariation>[];
  state: IProgramState;
  variationExpr: string;
  finishDayExpr: string;
  descriptions: string[];
  tags?: number[];
  updateDayExpr?: string;
  diffPaths?: string[];
  description?: string;
  descriptionExpr?: string;
  quickAddSets?: boolean;
  enableRepRanges?: boolean;
  enableRpe?: boolean;
  stateMetadata?: IProgramStateMetadata;
  timerExpr?: string;
  reuseLogic?: v.InferOutput<typeof VProgramExerciseReuseLogic>;
  warmupSets?: v.InferOutput<typeof VProgramExerciseWarmupSet>[];
  reuseFinishDayScript?: string;
  reuseUpdateDayScript?: string;
}
export const VProgramExercise: v.GenericSchema<IProgramExercise> = v.object({
  exerciseType: VExerciseType,
  id: v.string(),
  name: v.string(),
  variations: v.array(VProgramExerciseVariation),
  state: VProgramState,
  variationExpr: v.string(),
  finishDayExpr: v.string(),
  descriptions: v.array(v.string()),
  tags: v.optional(v.array(v.number())),
  updateDayExpr: v.optional(v.string()),
  diffPaths: v.optional(v.array(v.string())),
  description: v.optional(v.string()),
  descriptionExpr: v.optional(v.string()),
  quickAddSets: v.optional(v.boolean()),
  enableRepRanges: v.optional(v.boolean()),
  enableRpe: v.optional(v.boolean()),
  stateMetadata: v.optional(VProgramStateMetadata),
  timerExpr: v.optional(v.string()),
  reuseLogic: v.optional(VProgramExerciseReuseLogic),
  warmupSets: v.optional(v.array(VProgramExerciseWarmupSet)),
  reuseFinishDayScript: v.optional(v.string()),
  reuseUpdateDayScript: v.optional(v.string()),
});
const _VProgramExerciseMatches: IEquals<v.InferOutput<typeof VProgramExercise>, IProgramExercise> = true;
void _VProgramExerciseMatches;

export const VExercisePickerFilters = v.object({
  equipment: v.optional(v.array(VBuiltinEquipment)),
  type: v.optional(v.array(VExerciseKind)),
  muscles: v.optional(v.array(VMuscle)),
  isStarred: v.optional(v.boolean()),
});
export type IExercisePickerFilters = v.InferOutput<typeof VExercisePickerFilters>;

export const VExercisePickerProgramExercise = v.object({
  type: v.literal("program"),
  exerciseType: VExerciseType,
  week: v.number(),
  dayInWeek: v.number(),
});
export type IExercisePickerProgramExercise = v.InferOutput<typeof VExercisePickerProgramExercise>;

export const VExercisePickerAdhocExercise = v.object({
  type: v.literal("adhoc"),
  exerciseType: VExerciseType,
  label: v.optional(v.string()),
});
export type IExercisePickerAdhocExercise = v.InferOutput<typeof VExercisePickerAdhocExercise>;

export const VExercisePickerTemplate = v.object({
  type: v.literal("template"),
  name: v.string(),
  label: v.optional(v.string()),
});
export type IExercisePickerTemplate = v.InferOutput<typeof VExercisePickerTemplate>;

export const VExercisePickerSelectedExercise = v.union([
  VExercisePickerProgramExercise,
  VExercisePickerAdhocExercise,
  VExercisePickerTemplate,
]);
export type IExercisePickerSelectedExercise = v.InferOutput<typeof VExercisePickerSelectedExercise>;

export const VExercisePickerState = v.object({
  screenStack: v.array(VExercisePickerScreen),
  sort: VExercisePickerSort,
  filters: VExercisePickerFilters,
  selectedExercises: v.array(VExercisePickerSelectedExercise),
  mode: v.union([v.literal("workout"), v.literal("program")]),
  showMuscles: v.optional(v.boolean()),
  customExerciseName: v.optional(v.string()),
  label: v.optional(v.string()),
  templateName: v.optional(v.string()),
  selectedTab: v.optional(v.number()),
  editCustomExercise: v.optional(VCustomExercise),
  search: v.optional(v.string()),
  exerciseType: v.optional(VExerciseType),
  entryIndex: v.optional(v.number()),
});
export type IExercisePickerState = v.InferOutput<typeof VExercisePickerState>;

export const VProgressUi = v.object({
  vtype: v.optional(v.literal("progress_ui")),
  id: v.optional(v.string()),
  amrapModal: v.optional(
    v.object({
      entryIndex: v.number(),
      setIndex: v.number(),
      isAmrap: v.optional(v.boolean()),
      logRpe: v.optional(v.boolean()),
      askWeight: v.optional(v.boolean()),
      userVars: v.optional(v.boolean()),
      nonce: v.optional(v.number()),
    })
  ),
  editModal: v.optional(
    v.object({
      programExerciseId: v.string(),
      entryIndex: v.number(),
    })
  ),
  dateModal: v.optional(
    v.object({
      date: v.string(),
      time: v.number(),
    })
  ),
  exercisePicker: v.optional(
    v.object({
      state: v.optional(VExercisePickerState),
    })
  ),
  equipmentModal: v.optional(
    v.object({
      exerciseType: v.optional(VExerciseType),
    })
  ),
  rm1Modal: v.optional(
    v.object({
      exerciseType: v.optional(VExerciseType),
    })
  ),
  editSetModal: v.optional(
    v.object({
      isWarmup: v.boolean(),
      entryIndex: v.number(),
      exerciseType: v.optional(VExerciseType),
      programExerciseId: v.optional(v.string()),
      set: VSet,
      setIndex: v.optional(v.number()),
    })
  ),
  exerciseBottomSheet: v.optional(
    v.object({
      entryIndex: v.number(),
    })
  ),
  entryIndexEditMode: v.optional(v.number()),
  currentEntryIndex: v.optional(v.number()),
  showSupersetPicker: v.optional(v.lazy(() => VHistoryEntry)),
  forceUpdateEntryIndex: v.optional(v.boolean()),
  isExternal: v.optional(v.boolean()),
  nativeNotificationScheduled: v.optional(v.boolean()),
});
export type IProgressUi = v.InferOutput<typeof VProgressUi>;

export const VIntervals = v.array(v.tuple([v.number(), v.union([v.number(), v.undefined(), v.null()])]));
export type IIntervals = v.InferOutput<typeof VIntervals>;

export interface IHistoryRecord {
  vtype: "history_record" | "progress";
  date: string;
  programId: string;
  programName: string;
  day: number;
  dayName: string;
  entries: IHistoryEntry[];
  startTime: number;
  id: number;
  endTime?: number;
  week?: number;
  dayInWeek?: number;
  ui?: IProgressUi;
  intervals?: IIntervals;
  deletedProgramExercises?: Record<string, boolean | undefined>;
  userPromptedStateVars?: Record<string, IProgramState | undefined>;
  changes?: IHistoryRecordChange[];
  timerSince?: number;
  timerMode?: IProgressMode;
  timer?: number;
  timerEntryIndex?: number;
  timerSetIndex?: number;
  notes?: string;
  updatedAt?: number;
}
export const VHistoryRecord: v.GenericSchema<IHistoryRecord> = v.object({
  vtype: v.union([v.literal("history_record"), v.literal("progress")]),
  date: v.string(),
  programId: v.string(),
  programName: v.string(),
  day: v.number(),
  dayName: v.string(),
  entries: v.array(VHistoryEntry),
  startTime: v.number(),
  id: v.number(),
  endTime: v.optional(v.number()),
  week: v.optional(v.number()),
  dayInWeek: v.optional(v.number()),
  ui: v.optional(VProgressUi),
  intervals: v.optional(VIntervals),
  deletedProgramExercises: v.optional(v.record(v.string(), v.optional(v.boolean()))),
  userPromptedStateVars: v.optional(v.record(v.string(), v.optional(VProgramState))),
  changes: v.optional(v.array(VHistoryRecordChange)),
  timerSince: v.optional(v.number()),
  timerMode: v.optional(VProgressMode),
  timer: v.optional(v.number()),
  timerEntryIndex: v.optional(v.number()),
  timerSetIndex: v.optional(v.number()),
  notes: v.optional(v.string()),
  updatedAt: v.optional(v.number()),
});
const _VHistoryRecordMatches: IEquals<v.InferOutput<typeof VHistoryRecord>, IHistoryRecord> = true;
void _VHistoryRecordMatches;

export const VProgramDayEntry = v.object({
  exercise: VExerciseType,
  sets: v.array(VProgramSet),
});
export type IProgramDayEntry = v.InferOutput<typeof VProgramDayEntry>;

export const VProgramWeek = v.object({
  id: v.string(),
  name: v.string(),
  days: v.array(v.object({ id: v.string() })),
  description: v.optional(v.string()),
});
export type IProgramWeek = v.InferOutput<typeof VProgramWeek>;

export const VProgramDay = v.object({
  id: v.string(),
  name: v.string(),
  exercises: v.array(v.object({ id: v.string() })),
  description: v.optional(v.string()),
});
export type IProgramDay = v.InferOutput<typeof VProgramDay>;

export const VPlannerProgramDay = v.object({
  name: v.string(),
  exerciseText: v.string(),
  id: v.optional(v.string()),
  description: v.optional(v.string()),
});
export type IPlannerProgramDay = v.InferOutput<typeof VPlannerProgramDay>;

export const VPlannerProgramWeek = v.object({
  name: v.string(),
  days: v.array(VPlannerProgramDay),
  id: v.optional(v.string()),
  description: v.optional(v.string()),
});
export type IPlannerProgramWeek = v.InferOutput<typeof VPlannerProgramWeek>;

export const VPlannerProgram = v.object({
  vtype: v.literal("planner"),
  name: v.string(),
  weeks: v.array(VPlannerProgramWeek),
});
export type IPlannerProgram = v.InferOutput<typeof VPlannerProgram>;

export interface IProgram {
  vtype: "program";
  exercises: IProgramExercise[];
  id: string;
  name: string;
  description: string;
  url: string;
  author: string;
  nextDay: number;
  days: IProgramDay[];
  weeks: IProgramWeek[];
  isMultiweek: boolean;
  tags: IProgramTag[];
  deletedDays?: string[];
  deletedWeeks?: string[];
  deletedExercises?: string[];
  clonedAt?: number;
  shortDescription?: string;
  planner?: IPlannerProgram;
  updatedAt?: number;
  authorid?: string | null;
  source?: string | null;
}
export const VProgram: v.GenericSchema<IProgram> = v.object({
  vtype: v.literal("program"),
  exercises: v.array(VProgramExercise),
  id: v.string(),
  name: v.string(),
  description: v.string(),
  url: v.string(),
  author: v.string(),
  nextDay: v.number(),
  days: v.array(VProgramDay),
  weeks: v.array(VProgramWeek),
  isMultiweek: v.boolean(),
  tags: v.array(VProgramTag),
  deletedDays: v.optional(v.array(v.string())),
  deletedWeeks: v.optional(v.array(v.string())),
  deletedExercises: v.optional(v.array(v.string())),
  clonedAt: v.optional(v.number()),
  shortDescription: v.optional(v.string()),
  planner: v.optional(VPlannerProgram),
  updatedAt: v.optional(v.number()),
  authorid: v.optional(v.union([v.string(), v.null()])),
  source: v.optional(v.union([v.string(), v.null()])),
});
const _VProgramMatches: IEquals<v.InferOutput<typeof VProgram>, IProgram> = true;
void _VProgramMatches;

export const VStatsWeightValue = v.object({
  vtype: v.literal("stat"),
  value: VWeight,
  timestamp: v.number(),
  updatedAt: v.optional(v.number()),
  appleUuid: v.optional(v.string()),
});
export type IStatsWeightValue = v.InferOutput<typeof VStatsWeightValue>;

export const VStatsWeight = v.object({
  weight: v.optional(v.array(VStatsWeightValue)),
});
export type IStatsWeight = v.InferOutput<typeof VStatsWeight>;

export const VStatsLengthValue = v.object({
  vtype: v.literal("stat"),
  value: VLength,
  timestamp: v.number(),
  updatedAt: v.optional(v.number()),
  appleUuid: v.optional(v.string()),
});
export type IStatsLengthValue = v.InferOutput<typeof VStatsLengthValue>;

export type IStatsLength = Partial<Record<(typeof statsLengthDef)[number], IStatsLengthValue[]>>;
export const VStatsLength: v.GenericSchema<IStatsLength> = v.object(
  statsLengthDef.reduce<Record<string, v.GenericSchema<IStatsLengthValue[] | undefined>>>((memo, key) => {
    memo[key] = v.optional(v.array(VStatsLengthValue));
    return memo;
  }, {})
);

export const VStatsPercentageValue = v.object({
  vtype: v.literal("stat"),
  value: VPercentage,
  timestamp: v.number(),
  updatedAt: v.optional(v.number()),
  appleUuid: v.optional(v.string()),
});
export type IStatsPercentageValue = v.InferOutput<typeof VStatsPercentageValue>;

export const VStatsPercentage = v.object({
  bodyfat: v.optional(v.array(VStatsPercentageValue)),
});
export type IStatsPercentage = v.InferOutput<typeof VStatsPercentage>;

export type IStatsKey = keyof IStatsLength | keyof IStatsWeight | keyof IStatsPercentage;

export type IExerciseSelectedType = "weight" | "volume";
export type IVolumeSelectedType = "sets" | "volume";

function buildBoolPartial<K extends string>(
  keys: readonly K[]
): v.ObjectSchema<Record<K, v.OptionalSchema<v.BooleanSchema<undefined>, undefined>>, undefined> {
  const entries = keys.reduce<Record<string, v.OptionalSchema<v.BooleanSchema<undefined>, undefined>>>((memo, key) => {
    memo[key] = v.optional(v.boolean());
    return memo;
  }, {});
  return v.object(entries) as v.ObjectSchema<
    Record<K, v.OptionalSchema<v.BooleanSchema<undefined>, undefined>>,
    undefined
  >;
}

export const VStatsWeightEnabled = buildBoolPartial(statsWeightDef);
export type IStatsWeightEnabled = v.InferOutput<typeof VStatsWeightEnabled>;

export const VStatsLengthEnabled = buildBoolPartial(statsLengthDef);
export type IStatsLengthEnabled = v.InferOutput<typeof VStatsLengthEnabled>;

export const VStatsPercentageEnabled = buildBoolPartial(statsPercentageDef);
export type IStatsPercentageEnabled = v.InferOutput<typeof VStatsPercentageEnabled>;

export const VStatsEnabled = v.object({
  weight: VStatsWeightEnabled,
  length: VStatsLengthEnabled,
  percentage: VStatsPercentageEnabled,
});
export type IStatsEnabled = v.InferOutput<typeof VStatsEnabled>;

export const VSettingsTimers = v.object({
  warmup: v.optional(v.union([v.number(), v.null()])),
  workout: v.optional(v.union([v.number(), v.null()])),
  reminder: v.optional(v.number()),
  superset: v.optional(v.number()),
});
export type ISettingsTimers = v.InferOutput<typeof VSettingsTimers>;

export const VGraph = v.union([
  v.object({ vtype: v.literal("graph"), type: v.literal("exercise"), id: VExerciseId }),
  v.object({
    vtype: v.literal("graph"),
    type: v.literal("statsWeight"),
    id: v.picklist(statsWeightDef),
  }),
  v.object({
    vtype: v.literal("graph"),
    type: v.literal("statsLength"),
    id: v.picklist(statsLengthDef),
  }),
  v.object({
    vtype: v.literal("graph"),
    type: v.literal("statsPercentage"),
    id: v.picklist(statsPercentageDef),
  }),
  v.object({ vtype: v.literal("graph"), type: v.literal("muscleGroup"), id: v.string() }),
]);
export type IGraph = v.InferOutput<typeof VGraph>;

export const VEquipmentData = v.object({
  vtype: v.literal("equipment_data"),
  bar: v.object({ lb: VWeight, kg: VWeight }),
  multiplier: v.number(),
  plates: v.array(v.object({ weight: VWeight, num: v.number() })),
  fixed: v.array(VWeight),
  isFixed: v.boolean(),
  unit: v.optional(VUnit),
  name: v.optional(v.string()),
  similarTo: v.optional(v.string()),
  isDeleted: v.optional(v.boolean()),
  useBodyweightForBar: v.optional(v.boolean()),
  isAssisting: v.optional(v.boolean()),
  notes: v.optional(v.string()),
});
export type IEquipmentData = v.InferOutput<typeof VEquipmentData>;
export type IAllEquipment = Partial<Record<string, IEquipmentData>>;

export const VGraphOptions = v.object({
  movingAverageWindowSize: v.optional(v.number()),
});
export type IGraphOptions = v.InferOutput<typeof VGraphOptions>;

export const VMuscleMultiplier = v.object({
  muscle: VMuscle,
  multiplier: v.number(),
});
export type IMuscleMultiplier = v.InferOutput<typeof VMuscleMultiplier>;

export const VExerciseDataValue = v.object({
  rm1: v.optional(VWeight),
  rounding: v.optional(v.number()),
  equipment: v.optional(v.record(v.string(), v.optional(v.string()))),
  notes: v.optional(v.string()),
  muscleMultipliers: v.optional(v.record(v.string(), v.optional(v.number()))),
  isUnilateral: v.optional(v.boolean()),
});
// The schema accepts any string key for muscleMultipliers so stale or future muscle
// keys do not invalidate storage; the static type narrows back to IMuscle for consumers.
export type IExerciseDataValue = Omit<v.InferOutput<typeof VExerciseDataValue>, "muscleMultipliers"> & {
  muscleMultipliers?: Partial<Record<IMuscle, number>>;
};
export type IExerciseData = Partial<Record<string, IExerciseDataValue>>;

export const VPlannerSettings = v.object({
  synergistMultiplier: v.number(),
  strengthSetsPct: v.number(),
  hypertrophySetsPct: v.number(),
  weeklyRangeSets: v.record(VScreenMuscle, v.optional(v.tuple([v.number(), v.number()]))),
  weeklyFrequency: v.record(VScreenMuscle, v.optional(v.number())),
});
export type IPlannerSettings = v.InferOutput<typeof VPlannerSettings>;

export const VGym = v.object({
  vtype: v.literal("gym"),
  id: v.string(),
  name: v.string(),
  equipment: v.record(VEquipment, v.optional(VEquipmentData)),
});
export type IGym = v.InferOutput<typeof VGym>;

export const VWorkoutSettings = v.object({
  targetType: VTargetType,
  shouldHideGraphs: v.optional(v.boolean()),
  shouldKeepProgramExerciseId: v.optional(v.boolean()),
  shouldShowInvisibleEquipment: v.optional(v.boolean()),
  pickerSort: v.optional(VExercisePickerSort),
});
export type IWorkoutSettings = v.InferOutput<typeof VWorkoutSettings>;

export const VGraphs = v.object({
  vtype: v.literal("graphs"),
  graphs: v.array(VGraph),
});
export type IGraphs = v.InferOutput<typeof VGraphs>;

export const VMuscleGroupsSettings = v.object({
  vtype: v.literal("muscle_groups_settings"),
  data: v.record(
    v.string(),
    v.optional(
      v.object({
        name: v.optional(v.string()),
        isHidden: v.optional(v.boolean()),
        muscles: v.optional(v.array(VMuscle)),
      })
    )
  ),
});
export type IMuscleGroupsSettings = v.InferOutput<typeof VMuscleGroupsSettings>;

export interface ISettings {
  timers: ISettingsTimers;
  gyms: IGym[];
  deletedGyms: string[];
  graphs: IGraphs;
  graphOptions: Record<string, IGraphOptions | undefined>;
  graphsSettings: {
    isSameXAxis?: boolean;
    isWithBodyweight?: boolean;
    isWithOneRm?: boolean;
    isWithProgramLines?: boolean;
    defaultType?: IGraphExerciseSelectedType;
    defaultMuscleGroupType?: IGraphMuscleGroupSelectedType;
  };
  exerciseStatsSettings: {
    ascendingSort?: boolean;
    hideWithoutWorkoutNotes?: boolean;
    hideWithoutExerciseNotes?: boolean;
  };
  exercises: Record<string, ICustomExercise | undefined>;
  statsEnabled: IStatsEnabled;
  units: IUnit;
  lengthUnits: ILengthUnit;
  volume: number;
  exerciseData: Record<string, IExerciseDataValue | undefined>;
  planner: IPlannerSettings;
  workoutSettings: IWorkoutSettings;
  muscleGroups: IMuscleGroupsSettings;
  appleHealthSyncWorkout?: boolean;
  appleHealthSyncMeasurements?: boolean;
  appleHealthAnchor?: string;
  googleHealthSyncWorkout?: boolean;
  googleHealthSyncMeasurements?: boolean;
  googleHealthAnchor?: string;
  healthConfirmation?: boolean;
  ignoreDoNotDisturb?: boolean;
  currentGymId?: string;
  isPublicProfile?: boolean;
  nickname?: string;
  alwaysOnDisplay?: boolean;
  vibration?: boolean;
  startWeekFromMonday?: boolean;
  textSize?: number;
  starredExercises?: Record<string, boolean | undefined>;
  theme?: "dark" | "light";
  currentBodyweight?: IWeight;
  affiliateEnabled?: boolean;
}
export const VSettings: v.GenericSchema<ISettings> = v.object({
  timers: VSettingsTimers,
  gyms: v.array(VGym),
  deletedGyms: v.array(v.string()),
  graphs: VGraphs,
  graphOptions: v.record(v.string(), v.optional(VGraphOptions)),
  graphsSettings: v.object({
    isSameXAxis: v.optional(v.boolean()),
    isWithBodyweight: v.optional(v.boolean()),
    isWithOneRm: v.optional(v.boolean()),
    isWithProgramLines: v.optional(v.boolean()),
    defaultType: v.optional(VGraphExerciseSelectedType),
    defaultMuscleGroupType: v.optional(VGraphMuscleGroupSelectedType),
  }),
  exerciseStatsSettings: v.object({
    ascendingSort: v.optional(v.boolean()),
    hideWithoutWorkoutNotes: v.optional(v.boolean()),
    hideWithoutExerciseNotes: v.optional(v.boolean()),
  }),
  exercises: v.record(v.string(), v.optional(VCustomExercise)),
  statsEnabled: VStatsEnabled,
  units: VUnit,
  lengthUnits: VLengthUnit,
  volume: v.number(),
  exerciseData: v.record(v.string(), v.optional(VExerciseDataValue)),
  planner: VPlannerSettings,
  workoutSettings: VWorkoutSettings,
  muscleGroups: VMuscleGroupsSettings,
  appleHealthSyncWorkout: v.optional(v.boolean()),
  appleHealthSyncMeasurements: v.optional(v.boolean()),
  appleHealthAnchor: v.optional(v.string()),
  googleHealthSyncWorkout: v.optional(v.boolean()),
  googleHealthSyncMeasurements: v.optional(v.boolean()),
  googleHealthAnchor: v.optional(v.string()),
  healthConfirmation: v.optional(v.boolean()),
  ignoreDoNotDisturb: v.optional(v.boolean()),
  currentGymId: v.optional(v.string()),
  isPublicProfile: v.optional(v.boolean()),
  nickname: v.optional(v.string()),
  alwaysOnDisplay: v.optional(v.boolean()),
  vibration: v.optional(v.boolean()),
  startWeekFromMonday: v.optional(v.boolean()),
  textSize: v.optional(v.number()),
  starredExercises: v.optional(v.record(VExerciseId, v.optional(v.boolean()))),
  theme: v.optional(v.union([v.literal("dark"), v.literal("light")])),
  currentBodyweight: v.optional(VWeight),
  affiliateEnabled: v.optional(v.boolean()),
});
const _VSettingsMatches: IEquals<v.InferOutput<typeof VSettings>, ISettings> = true;
void _VSettingsMatches;

export const VStats = v.object({
  weight: VStatsWeight,
  length: VStatsLength,
  percentage: VStatsPercentage,
});
export type IStats = v.InferOutput<typeof VStats>;

export const VSubscriptionReceipt = v.object({
  vtype: v.literal("subscription_receipt"),
  id: v.string(),
  value: v.string(),
  createdAt: v.number(),
});
export type ISubscriptionReceipt = v.InferOutput<typeof VSubscriptionReceipt>;

export const VSubscription = v.object({
  apple: v.array(VSubscriptionReceipt),
  google: v.array(VSubscriptionReceipt),
  key: v.optional(v.string()),
});
export type ISubscription = v.InferOutput<typeof VSubscription>;

export const VAffiliateData = v.object({
  id: v.string(),
  timestamp: v.number(),
  type: v.union([v.literal("coupon"), v.literal("program")]),
  vtype: v.literal("affiliate"),
});
export type IAffiliateData = v.InferOutput<typeof VAffiliateData>;

interface IStorageRaw {
  history: IHistoryRecord[];
  deletedHistory: number[];
  stats: IStats;
  deletedStats: number[];
  settings: ISettings;
  currentProgramId?: string;
  version: string;
  programs: IProgram[];
  deletedPrograms: number[];
  reviewRequests: number[];
  signupRequests: number[];
  helps: string[];
  tempUserId: string;
  email?: string;
  affiliates: Record<string, IAffiliateData | undefined>;
  subscription: ISubscription;
  whatsNew?: string;
  progress: IHistoryRecord[];
  originalId?: number;
  id?: number;
  referrer?: string;
  attribution?: string;
  _versions?: unknown;
}
export const VStorage: v.GenericSchema<IStorageRaw> = v.object({
  history: v.array(VHistoryRecord),
  deletedHistory: v.array(v.number()),
  stats: VStats,
  deletedStats: v.array(v.number()),
  settings: VSettings,
  currentProgramId: v.optional(v.string()),
  version: v.string(),
  programs: v.array(VProgram),
  deletedPrograms: v.array(v.number()),
  reviewRequests: v.array(v.number()),
  signupRequests: v.array(v.number()),
  helps: v.array(v.string()),
  tempUserId: v.string(),
  email: v.optional(v.string()),
  affiliates: v.record(v.string(), v.optional(VAffiliateData)),
  subscription: VSubscription,
  whatsNew: v.optional(v.string()),
  progress: v.array(VHistoryRecord),
  originalId: v.optional(v.number()),
  id: v.optional(v.number()),
  referrer: v.optional(v.string()),
  attribution: v.optional(v.string()),
  _versions: v.optional(v.unknown()),
});
const _VStorageMatches: IEquals<v.InferOutput<typeof VStorage>, IStorageRaw> = true;
void _VStorageMatches;

export const VMuscleGeneratorResponse = v.object({
  targetMuscles: v.array(VMuscle),
  synergistMuscles: v.array(VMuscle),
  types: v.array(VExerciseKind),
});
export type IMuscleGeneratorResponse = v.InferOutput<typeof VMuscleGeneratorResponse>;

export function vIs<T>(schema: v.GenericSchema<T>): { is: (u: unknown) => boolean } {
  return { is: (u: unknown): boolean => v.safeParse(schema, u).success };
}

export type IStorage = Omit<IStorageRaw, "_versions"> & {
  _versions?: IVersions<Omit<IStorageRaw, "_versions">>;
};

export type IPartialStorage = Omit<IStorage, "history" | "stats" | "programs"> &
  Partial<Pick<IStorage, "history" | "stats" | "programs">>;

export type IProgramContentSettings = Partial<
  Pick<ISettings, "units" | "planner" | "muscleGroups" | "exerciseData" | "workoutSettings"> & {
    timers: Partial<ISettings["timers"]>;
  }
>;

export type IDayData = {
  week?: number;
  day: number;
  dayInWeek?: number;
};

export type IShortDayData = {
  week: number;
  dayInWeek: number;
};

export type IDaySetData = {
  week: number;
  dayInWeek: number;
  setVariation: number;
  set: number;
};

export const ATOMIC_TYPES = [
  "history_record",
  "progress_ui",
  "set",
  "equipment_data",
  "custom_exercise",
  "planner",
  "stat",
  "graph",
  "graphs",
  "subscription_receipt",
  "affiliate",
  "muscle_groups_settings",
] as const;

export type IAtomicType = (typeof ATOMIC_TYPES)[number];

export const CONTROLLED_TYPES = ["program", "gym", "progress", "history_entry"] as const;

export type IControlledType = (typeof CONTROLLED_TYPES)[number];

export const CONTROLLED_FIELDS: Record<IControlledType, readonly string[]> = {
  program: ["name", "nextDay", "planner"] as const,
  gym: ["name", "equipment"] as const,
  progress: [
    "entries",
    "endTime",
    "intervals",
    "notes",
    "deletedProgramExercises",
    "userPromptedStateVars",
    "updatedAt",
    "changes",
    "timerSince",
    "timerMode",
    "timer",
    "timerEntryIndex",
    "timerSetIndex",
  ] as const,
  history_entry: [
    "exercise",
    "sets",
    "warmupSets",
    "index",
    "isSuppressed",
    "programExerciseId",
    "state",
    "vars",
    "notes",
    "changed",
    "superset",
    "updatePrints",
  ] as const,
};

export const TYPE_ID_MAPPING: Record<IAtomicType | IControlledType, string> = {
  affiliate: "id",
  program: "clonedAt",
  history_record: "id",
  set: "id",
  progress_ui: "id",
  history_entry: "id",
  progress: "startTime",
  gym: "id",
  custom_exercise: "id",
  stat: "timestamp",
  equipment_data: "id",
  planner: "name",
  subscription_receipt: "id",
  graph: "id",
  graphs: "id",
  muscle_groups_settings: "vtype",
};

export const DICTIONARY_FIELDS = [
  "settings.exercises",
  "settings.exerciseData",
  "settings.gyms.equipment",
  "affiliates",
] as const;

export type IDictionaryFieldPath = (typeof DICTIONARY_FIELDS)[number];

export const EXCLUDED_FIELDS: Partial<Record<IControlledType, readonly string[]>> = {
  progress: ["ui"] as const,
};

export const STORAGE_VERSION_TYPES: IVersionTypes<IAtomicType, IControlledType> = {
  atomicTypes: ATOMIC_TYPES,
  controlledTypes: CONTROLLED_TYPES,
  typeIdMapping: TYPE_ID_MAPPING,
  controlledFields: CONTROLLED_FIELDS,
  excludedFields: EXCLUDED_FIELDS,
  dictionaryFields: DICTIONARY_FIELDS,
  compactionThresholds: {
    "subscription.apple": 14 * 24 * 60 * 60 * 1000,
    "subscription.google": 14 * 24 * 60 * 60 * 1000,
  },
  typeValidators: {
    progress: vIs(VHistoryRecord),
  },
} as const;
