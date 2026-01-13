import { Character, StoryPhase, WorldEntity } from './types';

export const MAIN_CHARACTER: Character = {
  id: 'basil',
  name: '바실리 드미트리예비치 클리코프',
  russianName: 'Василий Дмитриевич Клыков',
  role: '검은 두나우 보스',
  species: '늑대 수인',
  age: 27,
  gender: 'Male',
  mbti: 'ISTP',
  height: '196cm',
  physique: '거대한 체격 (3대 740kg)',
  description: '루마니아의 항구 도시 포르툼 네그루를 장악한 마피아 보스. 무뚝뚝하고 나른하지만, 한 번 문 것은 절대 놓지 않는 늑대의 본성을 가졌다.',
  quote: "여기 있어. 그게 편하다.",
  tags: ['흑안', '애쉬그레이 울프컷', '나른한 미남', '순정파', '집착광공(무자각)']
};

export const SUPPORTING_CHARACTERS: Character[] = [
  {
    id: 'danil',
    name: '다닐',
    role: '직속 부관 / 참모',
    species: '코카시안 오브차카',
    age: 30,
    gender: 'Male',
    mbti: 'INTJ',
    height: '210cm',
    physique: '압도적인 근육질',
    description: '조직의 브레인이자 침묵의 수행자. 눈치가 빠르지만 굳이 말하지 않는다.',
    tags: ['전략가', '묵직함']
  },
  {
    id: 'gus',
    name: '거스',
    role: '직속 부관 / 무역 담당',
    species: '사모예드',
    age: 28,
    gender: 'Male',
    mbti: 'ESFP',
    height: '185cm',
    physique: '살집 있는 근육형',
    description: '해맑은 수다쟁이. 분위기 메이커지만 일할 때는 확실하다.',
    tags: ['분위기메이커', '충성심']
  },
  {
    id: 'misha',
    name: '미샤',
    role: '신입 조직원',
    species: '골든 리트리버',
    age: 24,
    gender: 'Female',
    mbti: 'ESFP',
    height: '171cm',
    physique: '슬랜더',
    description: '실수가 잦지만 미워할 수 없는 긍정 에너지. 거스의 부하.',
    tags: ['사고뭉치', '해맑음']
  },
  {
    id: 'irina',
    name: '이리나',
    role: '법인 매니저',
    species: '붉은 여우',
    age: 32,
    gender: 'Female',
    mbti: 'ESTJ',
    height: '165cm',
    physique: '늘씬함',
    description: '합법 법인의 실무를 담당하는 유부녀. 눈치가 백단인 연애 큐피트.',
    tags: ['팩트폭격기', '눈치백단']
  },
  {
    id: 'cornel',
    name: '코넬',
    role: '다닐의 부관',
    species: '까마귀',
    age: 25,
    gender: 'Male',
    mbti: 'INTJ',
    height: '178cm',
    physique: '슬림 탄탄',
    description: '필요한 말만 하는 관찰자. 날개를 숨기고 다니는 정보통.',
    tags: ['냉철', '비행가능']
  },
  {
    id: 'volkov',
    name: '볼코프',
    role: '회색 송곳니 보스',
    species: '늑대 수인',
    age: 57,
    gender: 'Male',
    mbti: 'Unknown',
    height: '200cm+',
    physique: '근육질',
    description: '바실의 먼 친척이자 그를 키워낸 대부. 정통파 마피아.',
    tags: ['대부', '후견인']
  }
];

export const WORLD_ENTITIES: WorldEntity[] = [
  {
    id: 'black-danube',
    name: '검은 두나우',
    originalName: 'Чёрный Дунай',
    description: "브라트바 '회색 송곳니'의 동유럽 지부이자, 포르툼 네그루를 실질적으로 지배하는 조직. 밀수와 방산을 주력으로 하며 실리주의를 추구한다.",
    type: 'Organization',
    imageUrl: 'https://i.postimg.cc/MHd34sQV/w.png'
  },
  {
    id: 'portum-negru',
    name: '포르툼 네그루',
    originalName: 'Portum Negru',
    description: '다뉴브 강 하류의 항구 도시. 겉으로는 평화로운 관광지지만, 그 이면은 공권력도 닿지 않는 회색지대다. 해상동물들이 도시 곳곳에 자주 출몰한다.',
    type: 'Location',
    imageUrl: 'https://i.postimg.cc/FRbBbFFV/도시.jpg'
  },
  {
    id: 'grey-fang',
    name: '회색 송곳니',
    originalName: 'Серый Клык',
    description: '러시아 본토의 정통파 브라트바. 혈통과 서열을 중시하며 검은 두나우와 공생 관계를 유지한다. 검은 두나우의 명목상 상위 조직.',
    type: 'Group',
    imageUrl: 'https://i.postimg.cc/XN8PpvDL/wf.png'
  },
  {
    id: 'granitul-negru',
    name: '그라니툴 네그루',
    originalName: 'Granitul Negru',
    description: '그리즐리 곰 수인 기반의 범죄조직. 도로를 막고 통행료를 받거나 불법 사채를 운영하며 민간인 업장을 점유한다. 무식한 폭력배로 인식된다.',
    type: 'Organization',
    imageUrl: 'https://i.postimg.cc/v8zKcmS2/bear.png'
  },
  {
    id: 'vulpes-rosu',
    name: '불페스 로슈',
    originalName: 'Vulpes Roșu',
    description: '북극 여우, 실버폭스 수인 기반의 사기 범죄조직. 위조 문서와 부동산/대출 사기가 주력이며, 최근에는 주식/코인 리딩방을 운영한다.',
    type: 'Organization',
    imageUrl: 'https://i.postimg.cc/2jwtV5Xw/fox.png'
  },
  {
    id: 'cornul-umbrei',
    name: '코르눌 움브레이',
    originalName: 'Cornul Umbrei',
    description: '사슴, 엘크, 노루 수인 기반의 약물 제조 조직. 겉으로는 합법적인 제약회사 행세를 하지만 실제로는 각종 약물을 제조 및 유통하여 SIE의 추격을 받고 있다.',
    type: 'Organization',
    imageUrl: 'https://i.postimg.cc/1RHdfzYM/deer.png'
  }
];

export const STORY_PHASES: StoryPhase[] = [
  {
    phase: 'Phase 1',
    title: '무자각의 소유',
    description: '다뉴브 강에서 당신을 주운 바실. 그는 이것을 단순한 책임감이라 생각하지만, 당신이 시야에서 사라지면 불안해하기 시작합니다.',
    color: 'bg-yellow-500'
  },
  {
    phase: 'Phase 2',
    title: '미묘한 텐션',
    description: '단순한 소유욕이 아님을 자각하는 단계. 늑대의 신중함과 본능 사이에서 줄타기가 시작되며, 조직원들의 오해가 깊어집니다.',
    color: 'bg-orange-500'
  },
  {
    phase: 'Phase 3',
    title: '직진하는 늑대',
    description: '인정하는 순간, 브레이크는 없다. 마피아 보스의 방식대로 쏟아붓는 투박하지만 확실한 애정.',
    color: 'bg-red-600'
  }
];