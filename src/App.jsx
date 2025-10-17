import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Home, Info, Thermometer, UtensilsCrossed, Heart, AlertTriangle, BookOpen, Menu, X } from 'lucide-react'
import './App.css'

// 導入圖片
import tortoiseImg1 from './assets/AU0Btj5HZGBY.jpg'
import tortoiseImg2 from './assets/YbOAFXsAJ3Er.jpg'
import tortoiseImg3 from './assets/62672C78ii1Q.jpg'
import tortoiseImg4 from './assets/igpGno8UkZoa.jpg'
import tortoiseImg5 from './assets/ze1DH8nnVQWl.jpg'
import tortoiseImg6 from './assets/1LFkBJ5XRUu4.jpg'

// 定義 HeroImage 組件
const HeroImage = ({ imageSrc, title, description }) => (
  <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
    <img 
      src={imageSrc} 
      alt={title} 
      className="w-full h-64 md:h-96 object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
      <div className="p-8 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
        <p className="text-lg md:text-xl">{description}</p>
      </div>
    </div>
  </div>
);

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const navigation = [
    { id: 'home', name: '首頁', icon: Home, heroTitle: '認識蘇卡達象龜', heroDescription: '世界第三大陸龜，需要專業照護與長期承諾', heroImage: tortoiseImg5 },
    { id: 'intro', name: '基本介紹', icon: Info, heroTitle: '蘇卡達象龜基本介紹', heroDescription: '深入了解蘇卡達象龜的自然生態與習性', heroImage: tortoiseImg1 },
    { id: 'environment', name: '環境設置', icon: Thermometer, heroTitle: '打造理想的飼養環境', heroDescription: '溫度、濕度、光照與空間配置指南', heroImage: tortoiseImg6 },
    { id: 'diet', name: '飲食管理', icon: UtensilsCrossed, heroTitle: '蘇卡達象龜飲食指南', heroDescription: '高纖低蛋白，確保健康成長的飲食原則', heroImage: tortoiseImg4 },
    { id: 'health', name: '健康照護', icon: Heart, heroTitle: '蘇卡達象龜健康管理', heroDescription: '預防常見疾病，提供最佳照護', heroImage: tortoiseImg3 },
    { id: 'legal', name: '法規注意', icon: AlertTriangle, heroTitle: '飼養蘇卡達象龜的法規與責任', heroDescription: '了解法律規範，成為負責任的飼主', heroImage: tortoiseImg2 },
  ]

  const handleTabClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  const currentTabInfo = navigation.find(item => item.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">蘇卡達象龜飼養指南</h1>
                <p className="text-sm text-gray-600">African Spurred Tortoise Care Guide</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-2">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.id}
                    variant={activeTab === item.id ? 'default' : 'ghost'}
                    onClick={() => handleTabClick(item.id)}
                    className="gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </Button>
                )
              })}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden absolute top-4 right-4"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-2">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.id}
                    variant={activeTab === item.id ? 'default' : 'ghost'}
                    onClick={() => handleTabClick(item.id)}
                    className="gap-2 justify-start"
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </Button>
                )
              })}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {currentTabInfo && (
          <HeroImage 
            imageSrc={currentTabInfo.heroImage} 
            title={currentTabInfo.heroTitle} 
            description={currentTabInfo.heroDescription} 
          />
        )}

        {/* Home Section */}
        {activeTab === 'home' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">體型</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-amber-600">70-90cm</p>
                  <p className="text-sm text-gray-600">成年背甲長度</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">體重</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-amber-600">40-60kg</p>
                  <p className="text-sm text-gray-600">成年體重範圍</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">壽命</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-amber-600">50-70年</p>
                  <p className="text-sm text-gray-600">人工飼養壽命</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">原產地</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-amber-600">非洲</p>
                  <p className="text-sm text-gray-600">撒哈拉沙漠南緣</p>
                </CardContent>
              </Card>
            </div>

            {/* Introduction Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="w-5 h-5 text-amber-600" />
                    為什麼選擇蘇卡達象龜？
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>✓ 厚重堅硬的盾形背甲</p>
                  <p>✓ 粗壯有力的四肢</p>
                  <p>✓ 溫和的性格</p>
                  <p>✓ 長壽的陪伴</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    飼養挑戰
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>⚠ 需要極大的活動空間</p>
                  <p>⚠ 嚴格的環境控制要求</p>
                  <p>⚠ 長期飼養責任（50年以上）</p>
                  <p>⚠ 高昂的飼養成本</p>
                </CardContent>
              </Card>
            </div>

            {/* Image Gallery */}
            <Card>
              <CardHeader>
                <CardTitle>蘇卡達象龜圖集</CardTitle>
                <CardDescription>從幼龜到成龜的成長歷程</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="aspect-square overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform">
                    <img src={tortoiseImg1} alt="幼龜" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform">
                    <img src={tortoiseImg2} alt="幼龜照護" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform">
                    <img src={tortoiseImg3} alt="幼龜護理" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform">
                    <img src={tortoiseImg4} alt="成龜" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform">
                    <img src={tortoiseImg5} alt="成龜特寫" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform">
                    <img src={tortoiseImg6} alt="飼養環境" className="w-full h-full object-cover" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Introduction Section */}
        {activeTab === 'intro' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">自然生態與習性</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">原產地</h3>
                  <p className="text-gray-700">
                    蘇卡達象龜原產於非洲撒哈拉沙漠南端的乾燥草原和半沙漠地帶（例如馬利、尼日、查德等國家）。當地全年高溫，雨季短暫、旱季漫長，造就了蘇卡達耐高溫、耐乾旱的特性。
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">生活習性</h3>
                  <p className="text-gray-700">
                    蘇卡達象龜是日行性動物，白天活動頻繁，主要以各種草本植物、仙人掌、多肉植物等為食，是徹底的素食者。牠們的消化系統擅長分解高纖維植物，但無法適應高蛋白、高脂肪的食物。
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">挖掘本能</h3>
                  <p className="text-gray-700">
                    蘇卡達具備強烈的挖掘本能，常在野外挖掘地洞以躲避極端的高溫或低溫，利用地下較高的濕度與穩定的溫度來生存。這些野外習性對飼養環境有重要啟示：我們需模擬其原生環境的高熱乾燥氣候，同時提供躲避高溫/低溫的空間。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">體型與成長</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">成長階段</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>孵化期：</strong>背甲僅 5-8 公分</li>
                    <li>• <strong>幼龜期（1歲以下）：</strong>快速成長階段</li>
                    <li>• <strong>亞成龜（1-3歲）：</strong>可長到 15-30 公分</li>
                    <li>• <strong>成龜（3歲以上）：</strong>背甲可超過 60 公分</li>
                    <li>• <strong>完全成熟：</strong>背甲 70-90 公分，體重 40-60 公斤</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">保育狀況</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h3 className="font-bold text-lg mb-2 text-red-800">IUCN 紅色名錄：瀕危（EN）</h3>
                  <p className="text-gray-700">
                    蘇卡達象龜在國際自然保護聯盟（IUCN）紅色名錄中被列為瀕危物種。主要威脅包括棲地破壞、寵物貿易的過度採集，以及生存狩獵。目前該物種在其歷史分佈範圍內的大部分地區已變得稀有，族群嚴重碎片化。
                  </p>
                </div>
                <p className="text-gray-700">
                  每一隻圈養的蘇卡達象龜都是全球保育方程式的一部分。飼主不僅僅是在飼養一隻寵物，更是在照管一個瀕危物種的個體。這意味著需要更高的照護標準，有責任不助長非法貿易，並有義務防止動物被棄養。
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Environment Section */}
        {activeTab === 'environment' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">空間需求</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">不同成長階段的空間建議</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>幼龜（背甲 5-15 公分）：</strong>約 60×40 公分的飼養箱</li>
                    <li>• <strong>亞成體（15-30 公分）：</strong>120×80 公分以上的空間或陽台小圍區</li>
                    <li>• <strong>成年龜（30 公分以上）：</strong>整個房間的一角或戶外庭園，範圍以數平方公尺計算</li>
                    <li>• <strong>完全成熟：</strong>至少約 7.6×3.8 公尺的地盤（約 29 平方公尺）</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  空間越大越好，大到可以讓龜自由行走、挖掘和轉身而不受限。若空間過於狹窄，龜隻缺乏運動可能導致肌肉發育不良，甚至引發健康問題。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">溫度與濕度</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">溫度要求</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>日間活動溫度：</strong>28-32°C</li>
                      <li>• <strong>曬太區：</strong>32-35°C</li>
                      <li>• <strong>夜間溫度：</strong>不低於 25°C</li>
                      <li>• <strong>警戒溫度：</strong>低於 20°C 會影響食慾和消化</li>
                    </ul>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">濕度要求</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>幼龜階段：</strong>70-80% 較高濕度</li>
                      <li>• <strong>成年龜：</strong>50-60% 中等濕度</li>
                      <li>• <strong>梅雨季節：</strong>注意通風降濕</li>
                      <li>• <strong>冬季乾燥：</strong>定期噴水增濕</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <p className="font-bold text-yellow-800">關鍵原則：高溫配合適度濕度</p>
                  <p className="text-gray-700 mt-2">
                    保持日間 28-32°C 的溫暖環境，同時為幼龜提供高濕潤的區域，但也確保空氣流通，避免悶熱潮濕誘發病菌。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">光照需求</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">UVB 光照的重要性</h3>
                  <p className="text-gray-700">
                    充足的光照和紫外線對蘇卡達象龜的健康至關重要。UVB 光有助於龜體合成維生素 D₃ 並促進鈣質吸收，預防骨質疏鬆和龜甲畸形。
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">戶外飼養</h3>
                    <p className="text-gray-700">
                      盡量讓龜曬到自然陽光，因為太陽光提供理想的 UVB 光譜。
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">室內飼養</h3>
                    <p className="text-gray-700">
                      必須使用高品質的 UVB 燈（爬蟲專用日光燈管），每日照射約 11-13 小時，UVI 約 4.0-6.0。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">通風與墊材</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">通風</h3>
                  <p className="text-gray-700">
                    良好的空氣流通對蘇卡達象龜的環境很重要。悶熱不流通的空氣會滋生病原，特別是高濕條件下更易引發黴菌或呼吸道疾病。飼養箱或龜房應設計通氣孔或採用透氣材料。
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">墊材選擇</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>推薦：</strong>椰土纖維、腐葉土、乾草、70% 椰土 + 30% 河沙混合</li>
                    <li>✗ <strong>避免：</strong>純細沙、碎石（可能導致腸道阻塞）</li>
                    <li>• <strong>幼龜：</strong>2-3 公分厚的椰土，每週更換</li>
                    <li>• <strong>成體：</strong>5-8 公分厚的混合墊材，每 2 週部分更換</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Diet Section */}
        {activeTab === 'diet' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">主要飲食原則</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h3 className="font-bold text-lg mb-2 text-green-800">嚴格的草食性動物</h3>
                  <p className="text-gray-700">
                    蘇卡達象龜在野外以高纖維但營養清淡的植物為生。在人工飼養時應儘量模擬其天然飲食組成，確保營養均衡同時避免不良食物。
                  </p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">飲食結構（高纖、低蛋白）</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>75% 以上：</strong>牧草乾草（提摩西草、果園草等）</li>
                    <li>• <strong>15-20%：</strong>深綠色葉菜類（芥藍、羽衣甘藍、蒲公英等）</li>
                    <li>• <strong>少量：</strong>仙人掌（去刺）、無毒野草、可食用花卉</li>
                    <li>• <strong>避免：</strong>水果（高糖分）、肉類、寵物飼料、豆類</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">營養補充</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">鈣質和維生素 D₃</h3>
                  <p className="text-gray-700">
                    適當的營養補充對蘇卡達象龜尤為重要，可有效預防代謝性骨骼疾病和龜甲軟化變形。
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">補充方式</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 定期在食物上輕撒鈣粉（每週 1-2 次）</li>
                      <li>• 放置墨魚骨供龜自行啃食</li>
                      <li>• 提供高鈣植物（蒲公英、苜蓿等）</li>
                      <li>• 搭配 UVB 照射促進鈣吸收</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">注意事項</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>⚠ 避免過量補充鈣質</li>
                      <li>⚠ 高鈣低磷是關鍵原則</li>
                      <li>⚠ 有自然陽光時減少 D₃ 添加</li>
                      <li>⚠ 過量可能導致膀胱結石</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">餵食頻率與節制</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">不同年齡的餵食建議</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>幼龜（1 歲以下）：</strong>每天餵食一次，份量約體重的 5%</li>
                    <li>• <strong>亞成龜（1-3 歲）：</strong>每兩天餵一次，份量約體重的 4%</li>
                    <li>• <strong>成龜（3 歲以上）：</strong>每 3 天餵一次，份量約體重的 2-3%</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <p className="font-bold text-yellow-800">定時定量、合理節制</p>
                  <p className="text-gray-700 mt-2">
                    餵食時間最好安排在白天氣溫較高時（如上午晚些時候），因為溫暖環境有助於龜隻消化。切勿因龜「看起來很餓」就無限制提供食物，過度餵養會令龜體過胖，增加肝腎負擔，縮短壽命。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">避免高蛋白誤區</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h3 className="font-bold text-lg mb-2 text-red-800">絕對禁止的食物</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✗ 肉類、蛋奶製品</li>
                    <li>✗ 狗糧、貓糧等動物性蛋白</li>
                    <li>✗ 豆類、豌豆等植物高蛋白</li>
                    <li>✗ 高糖分水果（僅可極少量作為獎勵）</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  過多蛋白質會超出其腎臟負荷，導致代謝疾患，並且易引發龜甲畸形（隆背）或膀胱結石。蘇卡達已進化適應低營養價值的粗放飲食，給予過於精細的高營養食物反而會破壞其代謝平衡。
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-bold text-green-800">飼養原則：寧可營養稍低，不可蛋白太高</p>
                  <p className="text-gray-700 mt-2">
                    唯有長期維持高纖維、低蛋白的飲食結構，才能確保其甲殼和內臟的健康。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Health Section */}
        {activeTab === 'health' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">防止隆背（金字塔症）</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">什麼是隆背？</h3>
                  <p className="text-gray-700">
                    隆背即背甲的每塊鱗甲異常向上凸起，呈現金字塔般的外觀，是不當飼養常見的問題。科學研究指出，低環境濕度是導致蘇卡達幼龜隆背的最顯著因素之一。
                  </p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h3 className="font-bold text-lg mb-2 text-red-800">主要成因</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 幼年期環境濕度過低</li>
                    <li>• 飲食中蛋白質、熱量過高</li>
                    <li>• 鈣磷比例失調、缺乏維生素 D₃</li>
                    <li>• 生長過速、缺乏運動</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">預防措施</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ 提高幼龜飼養濕度至 65% 以上</li>
                    <li>✓ 提供濕潤躲避所或潮濕苔蘚區</li>
                    <li>✓ 每週讓龜泡澡 1-2 次</li>
                    <li>✓ 控制飲食結構（高纖維、低蛋白）</li>
                    <li>✓ 定期補充鈣質並提供 UVB 照射</li>
                    <li>✓ 提供充足運動空間和陽光</li>
                    <li>✓ 維持適宜溫度避免過冷</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <p className="font-bold text-yellow-800">預防重點：高溫、高濕搭配正確飲食和光照</p>
                  <p className="text-gray-700 mt-2">
                    隆背不僅影響外觀，更可能壓迫內臟、削弱四肢機能，嚴重時甚至因脊椎變形壓迫神經導致癱瘓。此狀況不可逆轉，因此及早預防至關重要。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">飲水與排酸（膀胱結石預防）</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">為什麼需要充足水分？</h3>
                  <p className="text-gray-700">
                    長期缺水的龜會通過重複吸收尿液來保水，導致尿酸鹽濃度過高，容易形成膀胱結石。預防尿酸鹽蓄積的關鍵是確保龜隻良好水合作用。
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">飲水設施</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 全天候備有淺水盤</li>
                      <li>• 水深不可超過龜背（以沒過龜腿為限）</li>
                      <li>• 每日換水並定期清洗水盤</li>
                      <li>• 水盤應足夠大且淺，方便龜自由進出</li>
                    </ul>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">泡澡方案</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 幼龜：每週浸泡 3-4 次</li>
                      <li>• 成龜：每週浸泡 1-2 次</li>
                      <li>• 每次 20-30 分鐘</li>
                      <li>• 使用溫水（接近環境溫度）</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-bold text-green-800">充足的飲水和定期泡澡有助於排出體內多餘的尿酸鹽</p>
                  <p className="text-gray-700 mt-2">
                    防止其在膀胱中累積形成結石。同時在飲食上避免過高蛋白，並適當提供利尿的蔬菜（如仙人掌或黃瓜適量）以促進排尿。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">避免強迫冬眠</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h3 className="font-bold text-lg mb-2 text-red-800">蘇卡達象龜不可強制冬眠</h3>
                  <p className="text-gray-700">
                    蘇卡達象龜並非會冬眠的龜種。屬於熱帶的蘇卡達在原生地全年均維持活動，只是在較冷的季節略為減緩行動，躲入地洞保暖，但不會進入真正的冬眠狀態。
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">低溫的危險</h3>
                  <p className="text-gray-700">
                    當環境溫度下降到 15°C 以下時，蘇卡達會變得遲緩、食慾降低，長期處於低溫會導致代謝停滯、免疫力下降，如果任其處在寒冷中「裝冬眠」，龜可能因餓壞或凍壞而生病，甚至有生命危險。
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">冬季保暖措施</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ 將蘇卡達移入室內溫暖處過冬</li>
                    <li>✓ 使用恆溫加熱設備維持 24-30°C 以上</li>
                    <li>✓ 持續提供日常照明和食物、水分</li>
                    <li>✓ 確保光照和 UVB 不中斷</li>
                    <li>✓ 遇寒流時讓龜晚間住進保暖的龜屋</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <p className="font-bold text-yellow-800">保持溫度才是王道</p>
                  <p className="text-gray-700 mt-2">
                    只要溫度達標，即使在寒冬，蘇卡達仍會白天出來活動、進食，夜晚休息。遵循「一律不冬眠」的原則照護蘇卡達，才能避免低溫對其造成的不可逆傷害。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">常見健康問題</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2 text-left">病症</th>
                        <th className="border p-2 text-left">關鍵症狀</th>
                        <th className="border p-2 text-left">主要原因</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2 font-bold">甲殼隆起</td>
                        <td className="border p-2">龜甲盾片呈金字塔狀隆起</td>
                        <td className="border p-2">幼年期濕度過低、蛋白質/熱量過高</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border p-2 font-bold">代謝性骨病</td>
                        <td className="border p-2">龜甲柔軟、四肢腫脹/無力、顫抖</td>
                        <td className="border p-2">鈣攝入不足、鈣磷比不當、UVB 光照不足</td>
                      </tr>
                      <tr>
                        <td className="border p-2 font-bold">膀胱結石</td>
                        <td className="border p-2">排尿/排便困難、後肢無力或癱瘓</td>
                        <td className="border p-2">長期脫水、蛋白質過高、鈣質過度補充</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border p-2 font-bold">呼吸道感染</td>
                        <td className="border p-2">鼻腔分泌物、眼部浮腫、張口呼吸</td>
                        <td className="border p-2">環境溫度過低、通風不良、濕度不當</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                  <p className="font-bold text-blue-800">預防勝於治療</p>
                  <p className="text-gray-700 mt-2">
                    幾乎所有這些病症都是由飼主引起的，因此可以通過嚴格執行正確的飼養原則來預防。一旦發現健康問題，應立即尋求爬蟲專科獸醫的協助。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Legal Section */}
        {activeTab === 'legal' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">遵守法規</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h3 className="font-bold text-lg mb-2 text-red-800">國際保育狀況</h3>
                  <p className="text-gray-700">
                    蘇卡達象龜屬於國際易危物種（IUCN 紅名冊列為瀕危 EN），各國對其貿易和飼養多有限制。
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">台灣法規</h3>
                  <p className="text-gray-700">
                    在台灣，蘇卡達象龜目前未被列入本土保育類野生動物名錄，也就是說一般情況下飼養並不違法。然而，這並不表示可以任意取得或棄養。
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">合法飼養要求</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 進口或販售需取得政府許可證</li>
                    <li>• 確保來源合法（經合法繁殖場或進口檢疫管道）</li>
                    <li>• 購買前確認賣家提供的 CITES 許可文件或芯片證明</li>
                    <li>• 從事繁殖或販賣須依規定申請繁殖登記或營業許可</li>
                    <li>• 部分縣市政府可能要求飼主在寵物登記或特定動物申請上備案</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="font-bold text-blue-800">法律底線不可忽視</p>
                  <p className="text-gray-700 mt-2">
                    確保先拿到合法文件再飼養，絕不能貪圖方便購買來路不明的個體。這不僅是守法問題，也是對野生動物保育的支持。萬一龜不慎走失或遭竊，立即通報警方或相關單位協助尋回，切勿擅自遺棄。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">飼養挑戰與長期承諾</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                  <h3 className="font-bold text-lg mb-2 text-orange-800">並非初學者理想的寵物龜</h3>
                  <p className="text-gray-700">
                    蘇卡達象龜帶來的飼養難度遠超過小型龜種，需要飼主有充分的準備和長期承諾。
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">飼養挑戰</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>⚠ 高昂的飼養成本</li>
                      <li>⚠ 大型龜園或龜屋建置</li>
                      <li>⚠ 強力的保溫和照明設備耗電</li>
                      <li>⚠ 大量的食物消耗</li>
                      <li>⚠ 龐大的排泄物清理</li>
                      <li>⚠ 力氣驚人且喜歡挖掘</li>
                      <li>⚠ 可能破壞圍欄和環境</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">長期承諾</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 壽命極長（50-70 年以上）</li>
                      <li>• 20-30 年內長成巨大個體</li>
                      <li>• 可能需要 50 年以上的照顧</li>
                      <li>• 常常可以陪伴主人數十年</li>
                      <li>• 甚至超過半個世紀</li>
                      <li>• 跨越多個世代的承諾</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <p className="font-bold text-yellow-800">決定飼養前請三思</p>
                  <p className="text-gray-700 mt-2">
                    務必慎重評估自己的空間、財力和時間是否足以支撐未來數十年的照顧。一旦決定飼養，就要做好迎接巨獸級寵物的心理準備，充分學習相關知識，並預留緊急醫療基金以備龜生病時接受爬蟲專科獸醫治療。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">杜絕棄養與救助</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h3 className="font-bold text-lg mb-2 text-red-800">切勿隨意棄養！</h3>
                  <p className="text-gray-700">
                    由於飼養困難，不負責任的棄養事件在蘇卡達象龜圈並不少見。許多飼主在龜小時候興致勃勃，但等龜長大後因空間或經濟問題難以為繼，最終將龜遺棄在野外或交由動物園/收容單位。
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">棄養的危害</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 對動物殘忍</li>
                    <li>• 可能對本地生態造成風險</li>
                    <li>• 外來種龜在野外可能成為入侵物種</li>
                    <li>• 可能傳播疾病</li>
                    <li>• 被棄養的龜往往很難在野外存活</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">如果無法繼續照顧</h3>
                  <p className="text-gray-700">
                    應主動聯繫爬蟲寵物協會、當地動物園或民間烏龜救援組織尋求轉養途徑。台灣目前也有爬蟲協會和愛好者團體在幫忙調度這些龜隻。
                  </p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="font-bold text-blue-800">龜在一日，責任終身</p>
                  <p className="text-gray-700 mt-2">
                    身為飼主，最重要的是在購買前就有「龜在一日，責任終身」的認知。不要輕率跟風飼養流行的寵物龜，也不要等自己撐不下去才想到求助。每一隻蘇卡達象龜都是生命中的長期夥伴，牠們對主人的依賴極高。請以負責任的態度對待您的龜，不輕言放棄。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">總結</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  蘇卡達象龜作為龜中巨無霸，其生態習性和飼養需求都異於一般寵物龜。牠們需要高溫、寬敞、通風良好的環境，幼體階段特別需要高濕度以避免甲殼畸形；飲食上以高纖維草食為主，必須控制蛋白攝入並補充鈣質；日常照護要注意定期浸泡、維持水分供給，並防止低溫導致的健康問題。
                </p>
                <p className="text-gray-700">
                  在台灣飼養蘇卡達，飼主需特別注意冬季保暖、防潮，以及守法飼養和長期承諾。
                </p>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-2 border-amber-200">
                  <p className="text-lg font-bold text-amber-800 text-center">
                    牠龜如其名，背負厚重歲月，也期待著主人的細心照料與陪伴。
                  </p>
                  <p className="text-center text-gray-700 mt-2">
                    在您決定迎接這位行動坦克之前，請三思而行；一旦開始飼養，就讓我們以科學知識和愛心，給予蘇卡達象龜一個安全、舒適且長久的家吧！
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">蘇卡達象龜飼養指南</h3>
          <p className="text-gray-400 mb-4">資訊整理僅供參考，實際飼養請諮詢專業獸醫</p>
          <p className="text-sm text-gray-400 mb-2">
            © 2025 <a href="https://sulcata.petsgo.pet" className="text-amber-400 hover:underline">蘇卡達象龜飼養指南</a>
          </p>
          <a 
            href="https://manus.im/invitation/AHHDRYYJCP5MK" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-colors duration-300"
          >
            邀請註冊Manus
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App

