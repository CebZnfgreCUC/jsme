var config = {};

// Администраторы бота:
config.admin_list = [1223497947, 1223497947, 1223497947, 1223497947] // ID админов бота
config.admin_username = 'uzb2oo3'; // Юзернейм админа (рекламного менеджера)

// Системные параметры бота:
config.proxy = null; // Прокси для соединения с серверами Telegram http://HohrVp:6H8BY2@81.4.108.157:35357
config.qiwi = 'токен киви сюда'; // API ключ QIWI кошелька (первые 3 галочки доступа)
config.mongodb = "mongodb://c25981_telepiar_na4u_ru:ZuKkoBiygekig50@mongo1.c25981.h2,mongo2.c25981.h2,mongo3.c25981.h2/c25981_telepiar_na4u_ru?replicaSet=MongoReplica"; // URL MongoDB базы 
config.token = "1301889252:AAGISby3ZvNLy540LluMzQSs-rdoHc5vlcQ"; // API ключ бота
config.bot_id = 1301889252; // ID бота (первая часть API ключа)
config.bot_username='LearnMoney24bot'; // Юзернейм бота
config.bot_chat='TElE_PIAR_chat'; // Юзернейм чата бота
config.bot_views_channel = 'TElE_PIAR_VIEWS'; // Юзернейм канала с просмотрами (бот должен быть в админах!)
config.bonus_channel = "@TElE_PIAR_UVED" // Канал, на который необходимо подписаться для получения ежедневного бонуса
config.bot_start_timestamp = 1592092800 // Таймстемп запуска бота в UNIX формате
config.qiwi_update = 10000; // Частота проверки на новые транзакции QIWI
config.antispam_interval = 0.3; // Интервал антиспама (с)
config.mm_interval = 75; // Интервал между сообщениями при рассылке
config.stats_update = 60; // Частота обновления статистики (с)
config.voucher_res = 8; // Количество символов в чеке

// Ценовые параметры бота:
config.bonusadv_sum = 50; // Стоимость рекламы в разделе бонуса
config.massmailing_kf = 0.009 // Стоимость 1-го пользователя при рассылке
config.pin_kf = 0.015 // Стоимость 1ого подписчика канала с просмотрами

config.bonus = 0.05;

config.view_cost = 0.02; // Стомость 1 просмотра
config.view_pay = 0.02; // Выплата за 1 посмотр

config.autoview_cost = 0.03; // Стомость 1 автопросмотра

config.member_cost = 0.2; // Стоимость 1 подписчика
config.member_pay = 0.15; // Выплата за 1 подписчика

config.bot_cost = 0.25; // Стоимость 1 пользователя бота
config.bot_pay = 0.15; // Выплата за 1 пользователя бота

config.group_cost = 0.30
config.group_pay = 0.35

config.task_comm = 0.2

config.exit_fee = -0.50; // Штраф за выход из канала

config.ref1_percent = 0.15; // % партнёрских отчислений 1ого уровня
config.ref2_percent = 0.05; // % партнёрских отчислений 2ого уровня

config.ref1_pay = 0.25; // Выплата за реферала на 1ой линии
config.ref2_pay = 0.1; // Выплата за реферала на 2ой линии

config.min_subs = 10; // Минимальный заказ подписчиков
config.min_views = 100; // Минимальный заказ просмотров
config.min_bot = 10; // Минимальный заказ переходов на бот
config.min_group = 10
config.min_payout = 3; // Минимальный размер выплаты

config.min_subs_time = 7;

config.ref_msg_cost = 5;

// Платёжные системы
config.qiwi_state = true; // Вкл/откл авто начисления QIWI
config.qiwi_num = '+998913634599'; // Номер QIWI

config.about_text = '🚀 <b>Добро пожаловать!</b>'

module.exports = config;
