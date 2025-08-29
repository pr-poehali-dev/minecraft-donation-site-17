import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const donationPackages = [
    {
      name: "VIP",
      price: "199₽",
      color: "bg-primary",
      features: [
        "💎 Доступ к /kit vip",
        "🏠 Установка дома (3 точки)",
        "🛡️ Приватные регионы",
        "⭐ Префикс [VIP]",
        "💰 Еженедельный бонус 1000$"
      ]
    },
    {
      name: "PREMIUM",
      price: "399₽",
      color: "bg-secondary",
      features: [
        "✨ Все привилегии VIP",
        "💎 Доступ к /kit premium",
        "🏠 Установка дома (5 точек)",
        "🔥 Доступ к /fly",
        "⭐ Префикс [PREMIUM]",
        "💰 Еженедельный бонус 2500$",
        "🌟 Цветной ник"
      ]
    },
    {
      name: "ELITE",
      price: "699₽",
      color: "bg-minecraft-gold",
      features: [
        "🔥 Все привилегии PREMIUM",
        "💎 Доступ к /kit elite",
        "🏠 Установка дома (10 точек)",
        "🚀 Доступ к /god",
        "⭐ Префикс [ELITE]",
        "💰 Еженедельный бонус 5000$",
        "👑 Особые эффекты"
      ]
    }
  ];

  const newsItems = [
    {
      date: "25 августа 2024",
      title: "Обновление 1.20.2 - Новые биомы!",
      content: "Добавлены новые биомы, мобы и блоки. Исследуйте Cherry Grove и улучшенные пещеры!"
    },
    {
      date: "20 августа 2024", 
      title: "Летний ивент - Treasure Hunt",
      content: "Найдите скрытые сокровища по всему серверу и получите уникальные награды!"
    },
    {
      date: "15 августа 2024",
      title: "Техническое обслуживание",
      content: "Плановые работы по улучшению производительности сервера завершены."
    }
  ];

  const rules = [
    "Запрещается использование читов и модификаций",
    "Уважайте других игроков, не используйте мат",
    "Не стройте рядом с чужими постройками без разрешения", 
    "Запрещается реклама других серверов",
    "Не злоупотребляйте привилегиями",
    "Следуйте указаниям администрации"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-minecraft-darkstone to-black">
      {/* Header */}
      <header className="bg-minecraft-grass border-b-4 border-minecraft-darkstone shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/img/0cf13803-ac32-4e84-8606-c7036bc7518f.jpg" alt="Server Icon" className="w-12 h-12 rounded-lg" />
              <div>
                <h1 className="text-3xl font-bold text-white font-rubik">MINE CRAFT SERVER</h1>
                <p className="text-white/80">mc.server.ru</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <span className="text-white font-semibold">Онлайн: 247/500</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="donate" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-minecraft-stone/80">
            <TabsTrigger value="donate" className="data-[state=active]:bg-primary">Донат</TabsTrigger>
            <TabsTrigger value="news" className="data-[state=active]:bg-primary">Новости</TabsTrigger>
            <TabsTrigger value="support" className="data-[state=active]:bg-primary">Поддержка</TabsTrigger>
            <TabsTrigger value="rules" className="data-[state=active]:bg-primary">Правила</TabsTrigger>
          </TabsList>

          {/* Donation Packages */}
          <TabsContent value="donate" className="mt-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">💎 ПРИВИЛЕГИИ СЕРВЕРА</h2>
              <p className="text-white/80 text-lg">Получите доступ к эксклюзивным возможностям и поддержите развитие сервера</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {donationPackages.map((pkg, index) => (
                <Card key={index} className="bg-minecraft-stone/90 border-4 border-minecraft-darkstone hover:scale-105 transition-transform">
                  <CardHeader className="text-center">
                    <div className={`w-full h-3 ${pkg.color} mb-4 rounded`}></div>
                    <CardTitle className="text-white text-2xl font-rubik">{pkg.name}</CardTitle>
                    <CardDescription className="text-4xl font-bold text-minecraft-gold">{pkg.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="text-white/90 flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-primary hover:bg-primary/80 text-white font-semibold py-3">
                      <Icon name="CreditCard" className="mr-2" size={16} />
                      КУПИТЬ СЕЙЧАС
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-primary/20 border-2 border-primary rounded-lg p-6 text-center">
              <Icon name="Zap" className="mx-auto mb-4 text-minecraft-gold" size={48} />
              <h3 className="text-2xl font-bold text-white mb-2">⚡ АВТОМАТИЧЕСКАЯ ВЫДАЧА</h3>
              <p className="text-white/80">
                Привилегии выдаются автоматически после оплаты! 
                Никаких ожиданий - заходи в игру и пользуйся новыми возможностями.
              </p>
            </div>
          </TabsContent>

          {/* News */}
          <TabsContent value="news" className="mt-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">📰 НОВОСТИ СЕРВЕРА</h2>
              <p className="text-white/80 text-lg">Следите за последними обновлениями и событиями</p>
            </div>
            
            <div className="grid gap-6">
              {newsItems.map((news, index) => (
                <Card key={index} className="bg-minecraft-stone/90 border-4 border-minecraft-darkstone">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-primary text-white">{news.date}</Badge>
                      <Icon name="Calendar" className="text-white/60" size={20} />
                    </div>
                    <CardTitle className="text-white text-xl font-rubik">{news.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">{news.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Support */}
          <TabsContent value="support" className="mt-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">🛠️ ПОДДЕРЖКА</h2>
              <p className="text-white/80 text-lg">Нужна помощь? Мы всегда готовы помочь!</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-minecraft-stone/90 border-4 border-minecraft-darkstone">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Icon name="MessageCircle" size={24} />
                    Discord
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4">Присоединяйтесь к нашему Discord серверу для быстрой помощи</p>
                  <Button className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white">
                    Присоединиться
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-minecraft-stone/90 border-4 border-minecraft-darkstone">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Icon name="Mail" size={24} />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4">Отправьте нам письмо с подробным описанием проблемы</p>
                  <Button className="w-full bg-primary hover:bg-primary/80 text-white">
                    support@server.ru
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-minecraft-stone/90 border-4 border-minecraft-darkstone rounded-lg px-4">
                <AccordionTrigger className="text-white hover:text-primary">
                  ❓ Как получить привилегии после покупки?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  Привилегии выдаются автоматически в течение 1-2 минут после успешной оплаты. Если этого не произошло, обратитесь в поддержку.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-minecraft-stone/90 border-4 border-minecraft-darkstone rounded-lg px-4">
                <AccordionTrigger className="text-white hover:text-primary">
                  🔄 Можно ли вернуть деньги за привилегии?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  Возврат средств возможен только в случае технических проблем с выдачей привилегий. Обратитесь в поддержку в течение 24 часов.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-minecraft-stone/90 border-4 border-minecraft-darkstone rounded-lg px-4">
                <AccordionTrigger className="text-white hover:text-primary">
                  🎮 Как подключиться к серверу?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  Используйте IP: mc.server.ru в Minecraft версии 1.20.2. Порт стандартный - 25565.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          {/* Rules */}
          <TabsContent value="rules" className="mt-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">📋 ПРАВИЛА СЕРВЕРА</h2>
              <p className="text-white/80 text-lg">Ознакомьтесь с правилами для комфортной игры</p>
            </div>
            
            <Card className="bg-minecraft-stone/90 border-4 border-minecraft-darkstone">
              <CardHeader>
                <CardTitle className="text-white text-xl">⚖️ Основные правила</CardTitle>
                <CardDescription className="text-white/60">
                  Нарушение правил может привести к блокировке аккаунта
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rules.map((rule, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-minecraft-darkstone/50 rounded-lg">
                      <Badge variant="outline" className="bg-primary text-white border-primary min-w-[30px] h-8 flex items-center justify-center">
                        {index + 1}
                      </Badge>
                      <p className="text-white/90">{rule}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-red-900/30 border-2 border-red-600 rounded-lg">
                  <p className="text-white text-center">
                    <Icon name="AlertTriangle" className="inline mr-2" size={20} />
                    <strong>Важно:</strong> Незнание правил не освобождает от ответственности!
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-minecraft-darkstone border-t-4 border-minecraft-grass py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-8 mb-4">
            <div className="flex items-center gap-2 text-white/80">
              <Icon name="Users" size={20} />
              <span>Игроков: 15,247</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Icon name="Clock" size={20} />
              <span>Аптайм: 99.9%</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Icon name="Server" size={20} />
              <span>Версия: 1.20.2</span>
            </div>
          </div>
          <p className="text-white/60">
            © 2024 MINE CRAFT SERVER. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;