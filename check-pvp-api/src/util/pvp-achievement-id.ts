export enum PvpAchievementId {
    // 3v3
    V3_2700 = 5267,
    V3_2400 = 5266,
    V3_2200 = 1160,
    V3_2000 = 405,
    V3_1750 = 403,
    V3_1500 = 402,
    // 2v2
    V2_2700 = 5267,
    V2_2400 = 5266,
    V2_2200 = 1160,
    V2_2000 = 405,
    V2_1750 = 403,
    V2_1500 = 402,
    // other
    GLADIATOR = 2091
}

export const ALL_PVP_ACHIEVEMENT_IDS: number[] = Object.values(PvpAchievementId).filter(v => typeof v === 'number');