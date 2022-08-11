import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources as ComponentTranslations } from "@escolalms/components/lib/styleguide/i18n";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      ...ComponentTranslations.en.translation,
      HowItWorks: "How it works",
      "Access from": "Access from",
      "Access to": "Access to",
      Access: "Access",
      "Start now": "Start now",
      "Add to Cart": "Add to Cart",
      "All Categories": "All categories",
      "All Tutors": "All tutors",
      "Go to the course": "Go to the course",
      Authentication: "Authentication",
      Back: "Back",
      "Back to website": "Back to website",
      "Buy Course": "Buy Course",
      "Buy now": "Buy now",
      Categories: "Categories",
      Category: "Category",
      "change font size": "change font size",
      Confirm: "Confirm",
      "Contact Us": "Contact Us",
      "Course Preview": "Course Preview",
      "Course Program": "Course Program",
      "Checkout Course": "Checkout Course",
      Courses: "Courses",
      DateAdded: "Date added",
      Description: "Description",
      Duration: "Duration",
      Found: "We found",
      FoundCourses_one:
        "We found <strong>{{count}}</strong> course available for you",
      FoundCourses_other:
        "We found <strong>{{count}}</strong> courses available for you",
      FREE: "FREE",
      group_access: "Group access",
      H5P: "Interactive element",
      Home: "Home",
      hours_to_complete: "Hours to complete",
      Image: "Image",
      Language: "Language",
      "Last Updated": "Last Updated",
      Lesson_one: "Lesson",
      Lesson_other: "Lessons",
      LessonSummary: "Lesson summary",
      Level: "Level",
      Lifetime: "Lifetime",
      "Login to buy": "Login to buy",
      "Meet your instructor": "Meet your instructor",
      "next topic": "next topic",
      "Next Topic": "Next topic",
      next: "Next",
      NoCourses: "No courses found",
      NoCoursesYet: "You have no courses yet. Find one on ",
      OEmbed: "Inserted Element",
      Pages: "Pages",
      Password: "Password",
      playVideo: "Play video",
      "Popular Tags": "Popular Tags",
      "prev topic": "prev topic",
      prev: "Prev",
      "Preview course for free": "Preview course for free",
      Preview: "Preview",
      "Price: high to low": "Price: high to low",
      "Price: low to high": "Price: low to high",
      RecentCourses: "Recent courses",
      Register: "Register",
      RichText: "Text",
      "Search for": "Search for",
      Send: "Send",
      SortBy: "Sort by",
      Students: "students",
      Student_one: "Student",
      Student_other: "Students",
      StudentsEnrolled: "Students Enrolled",
      Summary: "Summary",
      Tags: "Tags",
      Title: "Title",
      Topic_one: "Topic",
      Topic_other: "Topics",
      TopicSummary: "Topic summary",
      Tutor: "Tutor",
      Tutors: "Tutors",
      Video: "Video",
      "Video Coursers": "Video Coursers",
      "No Videos": "No Videos",
      Payment: "Payment",
      "Card number": "Card number",
      "Name on card": "Name on card",
      "Expiration date": "Expiration date",
      "with Stripe": "with Stripe",
      "stripe testing card numbers": "stripe testing card numbers",
      Eg: "eg",
      Use: "Use",
      Close: "Close",
      Pay: "Pay",
      Download: "Download",
      CoursePreviewNavbar:
        "This is course preview. Back to app, or purchase this course.",
      CoursesLength: "{{count}} courses",
      CoursesLength_few: "{{count}} courses",
      CoursesLength_many: "{{count}} courses",
      CoursesLength_one: "{{count}} course",
      CoursePage: {
        ErrorOccurred: "Error occurred",
        HeroBtnText: "See more",
        Level: "Level",
        StartDate: "Start date",
        CourseCategory: "Course category",
        Duration: "Duration",
        CompaniesTitle: "Companies that offer this course to their employees",
        CourseDescriptionTitle: "Course description",
        CourseRatingsTitle: "Course ratings",
        CourseRatingsEmpty: "This course has not been rated yet.",
        RelatedCoursesTitle: "Related courses",
        InterestTitle: "Maybe it will interest you",
        GoToCheckout: "Go to checkout",
        NotStarted: "Not started",
        "30Days": "30 day money return guarantee",
        ContentToDownload: "Content to download",
        SmartphoneAccess: "Access on smartphone and tablet",
        Certificate: "Certificate of completion",
        Finished: "Finished",
        Of: "of",
        IsFinished: "The course is over",
        Lessons: "Lessons",
        FinishToGetCertificate: "Finish to get certificate",
        MyProgress: "My progress",
        ToSeeProgress: "to see your progress",
        UnavailableCourse: "This course is unavailable to buy",
        AvarageRating: "Average rating of Jan Kamiński's training courses",
        Satisfaction: "satisfaction or your money back *",
        Guarantee: "Guaranteed",
        Recommends: "recommend training of Jan Kamiński",
        SeeOtherCourses: "See other courses",
        Language: "Language",
        Students: "Students",
        Teacher: "Teacher",
        Login: "Log in",
      },
      Cart: {
        UseTestCard: "Use test cards for Stripe",
        LearnMore: "Learn more",
        Cart: "Cart",
        PayWithStripe: "Pay with stripe",
        ChoosePaymentMethod: "Choose payment method",
        FreeCheckout: "End for free",
        Interest: "May be of interest to you",
        CartIsEmpty: "Cart is empty",
        CartSummary: "Cart total",
        Summary: "Summary",
        FullName: "Full name",
        RememberCard: "Remember card",
        YourCart: "Your cart",
        CreditCard: "Credit card",
        EmptyCartTitle: "Your cart is empty",
        EmptyCartText: "Add courses to your cart and checkout",
        EmptyCartBtnText: "Browse courses",
      },
      CourseProgram: {
        TopicAttachment: "Topic attachments",
        ShowAgenda: "Show agenda",
      },
      Warning: "Warning",
      "I'm aware": "I'm aware",
      EmailActivation: {
        Title: "Please check your email to complete the registration process",
        Text: `We sent a message to the address **{{email}}** z
        link to activate your account.
        Go to e-mail and confirm your e-mail address.`,
        HelpText: `**You did not receive the e-mail?**
- Check the SPAM folder
- Check that you have entered your e-mail address correctly
- We cannot deliver the message to your address (usually via firewall or mail filters)`,
        RegisterAgain: "Try registering again",
      },
      CoursesPage: {
        Category: "Category",
        Free: "Free",
        All: "All",
        Type: "Type",
        Courses: "Courses",
        Search: "Search courses",
      },
      TutorPage: {
        Courses: "Tutor Courses",
        TutorCoursesEmpty: "No courses",
      },
      Homepage: {
        HeroBtnText: "Check out our trainings",
        CoursesSlider1Title: "The best training for you",
        CoursesSlider2Title: "Last added",
        AwardedCoursesTitle: "Learning soft basics",
        AwardedCoursesBtnText: "See more training",
        CategoriesTitle: "See training categories",
        CategoryBtnText: "Read more",
      },
      LoginPage: {
        RememberMe: "Remember me",
        Lost: "Lost your password?",
        Reset: "Reset your password",
        TempLogin: "For this demo you can use the following credentials",
        Username: "Username",
        TempEmail1: "This demo is using fake email service",
        TempEmail2:
          "Use the following credentials to check what emails are being sent.",
        ForgotSuccess: "We send a email for password reset",
      },
      MyProfilePage: {
        Avatar: "Select file to replace Avatar",
        InvoiceTitle: "Invoice for order no",
        Invoice: "Invoice",
        OrdersEmpty: "You have not placed any orders yet",
        MyCourses: "My courses",
        OrdersHistory: "Orders history",
        Notifications: "Notifications",
        Logout: "Logout",
        FinishedCourses: "finished courses",
        TotalCertificates: "total certificates",
        MyProgress: "My progress",
        YourAccount: "Your account",
        EmptyCoursesText:
          "You don't have any courses yet, but thanks to our offer you can start learning today!",
        EmptyCoursesBtnText: "Choose a course for yourself",
        EmptyCoursesTitle: "Start your development",
        EmptyCertificates:
          "Here you will see your certificates after completed courses",
        RateCourse: "Rate this course",
        ShowMore: "Show more",
        MyCertificates: "My certificates",
        ALlCourses: "All courses",
        InProgress: "In progress",
        Planned: "Planned",
        Finished: "Finished",
        EditData: "Edit data",
      },
      Menu: {
        Browse: "Browse",
        HomePage: "Home Page",
        Courses: "Courses",
        Tutors: "Tutors",
        Me: "My Menu",
        Profile: "Profile",
        Notifications: "Notifications",
        LoginRegister: "Login / Register",
        Language: "Language",
        Orders: "Orders",
      },
      Footer: {
        HomePage: "Home Page",
        Courses: "Courses",
        Cart: "Cart",
        PoweredBy: "Powered by",
        UserProfile: "Your account",
      },
      Navbar: {
        MyProfile: "My Profile",
        MyCourses: "My Courses",
        MyCertificates: "My Certificates",
        MyMattermostChannels: "My Mattermost Channels",
        MyOrders: "My Orders",
        MyPayments: "My Payments",
        EditProfile: "Edit data",
        Logout: "Logout",
      },
      Custom404Page: {
        NotFound: "Error 404 : Page Not Found",
        Info: "The page you are looking for might have been removed had its name changed or is temporarily unavailable.",
      },
      Notifications: {
        EscolaLmsTopicFinishedTemplateEvent: "Topic finished",
        NoNotifications: "You have no notification",
        OrderPaid: "Order paid",
        UserLogged: "User logged in",
        list: "List",
        TopicFinished: "Topic finished",
        CourseAssigned: "Course assigned",
        PaymentRegistered: "Payment registered",
        PermissionRoleRemoved: "Permission role removed",
        PermissionRoleChanged: "Permission role changed",
        CartOrderPaid: "Cart order paid",
        CourseAccessFinished: "Course access finished",
        Logout: "Logout",
        UserRemovedFromGroup: "User removed from group",
        UserAddedToGroup: "User added to group",
        CoursedPublished: "Course published",
        ResetPassword: "Reset password",
        CourseAccessStarted: "Course access started",
        CartOrderSuccess: "Order success",
        AccountRegistered: "Account registered",
        ForgotPassword: "Forgot password",
        TopicTypeChanged: "Topic type changed",
        AccountDeleted: "Account deleted",
        AccountBlocked: "Account blocked",
        CourseFinished: "Course finished",
        PaymentSuccess: "Payment success",
        PdfCreated: "PDF created",
        CourseTutorUnassigned: "Course tutor unassigned",
        CourseUnassigned: "Course uassigned",
        AccountMustBeEnableByAdmin: "Account must be enable by Admin",
        SettingPackageConfigUpdated: "Setting package config updated",
        CourseTutorAssigned: "Course tutor assigned",
        AccountConfirmed: "Account confirmed",
      },
      Header: {
        Register: "Register",
        Login: "Log in",
      },
      AcceptCheckbox: "By checking this fields you accept",
      PrivacyPolicy: "Privacy Policy",
      TermsOfService: "Terms of Service",
      EmailWasVerified: "Email has been verified.",
      RateCourse: {
        ThankYou: "Thank you for rating this course",
        ThankYouMessage: "Your rating has been saved",
      },
    },
  },
  pl: {
    translation: {
      ...ComponentTranslations.pl.translation,
      Warning: "Uwaga",
      HowItWorks: "Jak to działa",
      "Start now": "Zacznij teraz",
      UnexpectedError: "Wystąpił nieoczekiwany błąd. Spróbuj ponownie",
      StartNow: "Zacznij teraz",
      Students: "kursantów",
      Lessons: "lekcji",
      "Access from": "Dostęp od",
      "Access to": "Dostęp do",
      Access: "Dostęp",
      "Add to Cart": "Dodaj do koszyka",
      "All Categories": "Wszystkie kategorie",
      "All Tutors": "Wszyscy Instruktorzy",
      "Go to the course": "Idź do kursu",
      Authentication: "Uwierzytelnianie",
      Back: "Wróć",
      "Back to website": "Wróć do strony głównej",
      "Buy Course": "Kup kurs",
      "Buy now": "Kup teraz",
      Categories: "Kategorie",
      "Checkout Course": "Zamówienie kursu",
      Category: "Kategoria",
      "change font size": "zmień wielkość tekstu",
      Confirm: "Potwierdź",
      "Contact Us": "Kontakt",
      "Course Preview": "Zajawka Kursu",
      "Course Program": "Program Kursu",
      Courses: "Kursy",
      DateAdded: "Data dodania",
      Description: "Opis",
      Duration: "Czas Trwania",
      Found: "Znaleźliśmy",
      FoundCourses_few:
        "Znaleźliśmy <strong>{{count}}</strong> kursy dostępne dla Ciebie",
      FoundCourses_many:
        "Znaleźliśmy <strong>{{count}}</strong> kursów dostępnych dla Ciebie",
      FoundCourses_one:
        "Znaleźliśmy <strong>{{count}}</strong> kurs dostępny dla Ciebie",
      FREE: "DARMOWY",
      group_access: "Dostęp grupowy",
      H5P: "Element interaktywny",
      Home: "Strona główna",
      hours_to_complete: "Godziny do ukończenia",
      Image: "Obraz",
      Language: "Język",
      "Last Updated": "Ostatnia aktualizacja",
      Lesson_few: "Lekcje",
      Lesson_many: "Lekcji",
      Lesson_one: "Lekcja",
      LessonSummary: "Podsumowanie lekcji",
      Level: "Poziom",
      Lifetime: "Dożywotni",
      "Login to buy": "Zaloguj się by kupić",
      "Meet your instructor": "Poznaj swojego nauczyciela",
      "Next Topic": "Następna lekcja",
      "next topic": "następny moduł",
      next: "Następny",
      NoCourses: "Nie znaleziono kursów",
      NoCoursesYet: "Nie masz kursów. Znajdź je na ",
      OEmbed: "Element wstawiony",
      Pages: "Strony",
      Password: "Hasło",
      playVideo: "Odtwórz wideo",
      "Popular Tags": "Popularne tagi",
      "prev topic": "poprzedni moduł",
      prev: "Poprzedni",
      "Preview course for free": "Podgląd kursu za darmo",
      Preview: "Podgląd",
      "Price: high to low": "Cena: od najniższej",
      "Price: low to high": "Cena: od najwyższej",
      RecentCourses: "Ostatnie kursy",
      Register: "Rejestracja",
      RichText: "Tekst",
      "Search for": "Szukaj",
      Send: "Wyślij",
      SortBy: "Sortuj według",
      Student_few: "Studentów",
      Student_many: "Studentów",
      Student_one: "Student",
      StudentsEnrolled: "Ilość słuchaczy",
      Summary: "Konspekt Kursu",
      Tags: "Tagi",
      Title: "Tytuł",
      Topic_few: "Tematy",
      Topic_many: "Tematów",
      Topic_one: "Temat",
      TopicSummary: "Podsumowanie tematu",
      Tutor: "Instruktor",
      Tutors: "Instruktorzy",
      Video: "Wideo",
      "Video Coursers": "Kursy wideo",
      "No Videos": "Brak wideo",
      Payment: "Płatność",
      "Card number": "Numer karty",
      "Name on card": "Nazwa na karcie",
      "Expiration date": "Data ważności",
      "with Stripe": "przez Stripe",
      "stripe testing card numbers": "stripe testowy numer karty",
      Eg: "np.",
      Use: "Użyj",
      Close: "Zamknij",
      Pay: "Zapłać",
      Download: "Pobierz",
      LoginAndRegister: "Logowanie i rejestracja",
      CoursesLength: "{{count}}kursów",
      CoursesLength_few: "{{count}} kursy",
      CoursesLength_many: "{{count}} kursów",
      CoursesLength_one: "{{count}} kurs",
      CoursePreviewNavbar:
        "To jest podgląd kursu. Wróć do aplikacji lub kup ten kurs.",
      "I'm aware": "Tak, wiem",
      EmailActivation: {
        Title: "Aby dokończyć proces rejestracji sprawdź swoją pocztę",
        Text: `Wysłaliśmy wiadomość na adres **{{email}}** z
          linkiem do aktywacji Twojego konta.
          Przejdź do poczty i potwierdź swój adres e-mail.`,
        HelpText: `**Nie dostałeś maila?**
  - Sprawdź folder SPAM
  - Sprawdź czy poprawnie wpisałeś adres e-mail
  - Nie możemy dostarczyć wiadomości na Twój adres (zazwyczaj  przez firewalla lub filtry na poczcie)`,
        RegisterAgain: "Wpisz adres ponownie",
      },
      CoursePage: {
        ErrorOccurred: "Wystąpił błąd",
        HeroBtnText: "Zobacz więcej",
        Level: "Poziom trudności",
        StartDate: "Termin rozpoczęcia",
        CourseCategory: "Kategoria szkolenia",
        Duration: "Czas trwania",
        CompaniesTitle: "Firmy które oferują ten kurs swoim pracownikom",
        CourseDescriptionTitle: "Opis szkolenia",
        CourseRatingsTitle: "Opinie studentów",
        CourseRatingsEmpty: "Ten kurs nie został jeszcze oceniony.",
        RelatedCoursesTitle: "Powiązane szkolenia",
        InterestTitle: "Może Cię zainteresuje",
        GoToCheckout: "Do kasy",
        NotStarted: "Kurs się jeszcze nie rozpoczął",
        "30Days": "Gwarantowane 30 dni na zwrot",
        ContentToDownload: "Materiały szkoleniowe do pobrania",
        SmartphoneAccess: "Dostęp na smartphone i tablet",
        Certificate: "Certyfikat ukończenia",
        Finished: "Ukończono",
        Of: "z",
        IsFinished: "Kurs się zakończył",
        Lessons: "Lekcji",
        FinishToGetCertificate: "Ukończ kurs aby zdobyć certyfikat",
        MyProgress: "Moje postępy",
        ToSeeProgress: "aby widzieć postępy",
        UnavailableCourse: "Kurs niemożliwy do kupienia",
        AvarageRating: "Średnia ocena szkoleń Jana Kamińskiego",
        Satisfaction: "zadowolenia lub zwrot pieniędzy*",
        Guarantee: "Gwarancja",
        Recommends: "Poleca szkolenia Jana Kaminskiego",
        SeeOtherCourses: "Zobacz inne kursy",
        Language: "Język",
        Students: "Uczniów",
        Teacher: "Nauczyciel",
        Login: "Zaloguj się",
      },
      Cart: {
        UseTestCard: "Użyj testowej karty Stripe",
        LearnMore: "Sprawdź karty",
        Cart: "Koszyk",
        PayWithStripe: "Płać za pomocą stripe Checkout",
        ChoosePaymentMethod: "Wybierz metodę płatności",
        FreeCheckout: "Zakończ bezpłatnie",
        Interest: "Może Cię zainteresować",
        CartIsEmpty: "Koszyk jest pusty",
        CartSummary: "Suma koszyka",
        Summary: "Podsumowanie",
        FullName: "Imię i nazwisko",
        RememberCard: "Zapamiętaj kartę",
        YourCart: "Twój koszyk",
        CreditCard: "Karta kredytowa",
        EmptyCartTitle: "Twój koszyk jest pusty",
        EmptyCartText: "Dodaj kursy do koszyka",
        EmptyCartBtnText: "Przeglądaj kursy",
      },
      CourseProgram: {
        TopicAttachment: "Załączniki lekcji",
        ShowAgenda: "Pokaż agendę",
      },
      CoursesPage: {
        Category: "Kategoria",
        Free: "Darmowe",
        All: "Wszystkie",
        Type: "Typ szkolenia",
        Courses: "Kursy",
        Search: "Szukaj kursów",
      },
      TutorPage: {
        Courses: "Kursy instruktorów",
        TutorCoursesEmpty: "Ten autor nie ma jeszcze żadnych kursów",
      },
      Homepage: {
        HeroBtnText: "Sprawdź nasze szkolenia",
        HeroText:
          "Witaj w platformie elearningowej Orange. Pomożemy Ci znaleźć najlepsze szkolenia",
        CoursesSlider1Title: "Najlepsze szkolenia dla Ciebie",
        CoursesSlider2Title: "Ostatnio dodane",
        AwardedCoursesTitle: "Nauka podstaw miękkich",
        AwardedCoursesBtnText: "Zobacz więcej szkoleń",
        CategoriesTitle: "Zobacz kategorie szkoleń",
        CategoryBtnText: "Zobacz",
      },
      LoginPage: {
        RememberMe: "Zapamietaj mnie",
        Lost: "Zapomniałeś hasła?",
        RPlaeset: "Zresetuj swoje hasło",
        TempLogin:
          "W tym demo możesz użyć następujących danych uwierzytelniających",
        Username: "Nazwa użytkownika",
        TempEmail1: "To demo używa fałszywej usługi e-mail.",
        TempEmail2:
          "Użyj poniższych danych uwierzytelniających, aby sprawdzić, jakie e-maile są wysyłane",
        ForgotSuccess:
          "Wysłaliśmy wiadomość e-mail z prośbą o zresetowanie hasła",
        ForgotSuccessStep2: "Twoje hasło zostało zmienione",
      },

      Menu: {
        Browse: "Szukaj",
        HomePage: "Strona Główna",
        Courses: "Kursy",
        Tutors: "Trenerzy",
        Me: "Moje",
        Profile: "Profil",
        Notifications: "Notifikacje",
        LoginRegister: "Logowanie / Rejestracja",
        Language: "Język",
        Orders: "Zamównienia",
      },
      Footer: {
        HomePage: "Strona Główna",
        Courses: "Kursy",
        Cart: "Koszyk",
        PoweredBy: "Powered by",
        UserProfile: "Twój profil",
      },
      MyProfilePage: {
        InvoiceTitle: "Faktura za zamówienie nr",
        Invoice: "Rachunek",
        OrdersEmpty: "Nie złożyłeś jeszcze żadnych zamówień",
        MyCourses: "Moje szkolenia",
        OrdersHistory: "Historia zakupów",
        Notifications: "Powiadomienia",
        Logout: "Wyloguj",
        FinishedCourses: "ukończonych kursów",
        TotalCertificates: "zdobytych certyfikatów",
        MyProgress: "Moje postępy",
        YourAccount: "Twoje konto",
        EmptyCoursesText:
          " Nie masz jeszcze żadnych kursów, ale dzięki naszej ofercie już dziś możesz zacząć naukę!",
        EmptyCoursesBtnText: " Wybierz kurs dla siebie",
        EmptyCoursesTitle: "Rozpocznij swój rozwój",
        EmptyCertificates:
          "Tu zobaczysz swoje certyfikaty po ukończonych kursach",
        RateCourse: "Oceń kurs",
        ShowMore: "Pokaż więcej",
        MyCertificates: "Moje certyfikaty",
        ALlCourses: "Wszystkie kursy",
        InProgress: "W trakcie",
        Planned: "Zaplanowane",
        Finished: "Ukończone",
        EditData: "Edytuj dane",
      },
      Navbar: {
        MyProfile: "Mój Profil",
        MyCourses: "Moje Kursy",
        MyCertificates: "Moje Certyfikaty",
        MyMattermostChannels: "Moje Kanały Mattermost",
        MyOrders: "Moje zamówienia",
        MyPayments: "Płatności",
        EditProfile: "Edytuj dane",
        Logout: "Wyloguj",
      },
      Custom404Page: {
        NotFound: "Error 404 : Nie znaleziono strony",
        Info: "Strona której szukasz może być usunięta albo zmienione jej nazwę albo jest czasowo niedostępna",
      },
      Notifications: {
        EscolaLmsTopicFinishedTemplateEvent: "Temat zakończony",
        NoNotifications: "Nie masz notyfikacji",
        OrderPaid: "Zamówienie opłacone",
        UserLogged: "Użytkownik zalogowany",
        list: "Lista",
        TopicFinished: "Temat zakończony",
        CourseAssigned: "Kurs przypisany",
        PaymentRegistered: "Płatność zarejestrowana",
        PermissionRoleRemoved: "Uprawnienia usunięte",
        PermissionRoleChanged: "Uprawnienia zmienione",
        CartOrderPaid: "Zamówienie w koszyku opłacone",
        CourseAccessFinished: "Dostęp do kursu zakończony",
        Logout: "Wylogowanie",
        UserRemovedFromGroup: "Użytkownik usunięty z grupy",
        UserAddedToGroup: "Użytkownik dodany do grupy",
        CoursedPublished: "Kurs opublikowany",
        ResetPassword: "Reset hasła",
        CourseAccessStarted: "Kurs aktywowany",
        CartOrderSuccess: "Zamówienie zakończone",
        AccountRegistered: "Konto zarejestrowano",
        ForgotPassword: "Zapomniałeś hasła",
        TopicTypeChanged: "Typ tematu zmieniony",
        AccountDeleted: "Konto usunięte",
        AccountBlocked: "Konto zablokowane",
        CourseFinished: "Kurs ukończony",
        PaymentSuccess: "Płatność zakończona",
        PdfCreated: "PDF stworzony",
        CourseTutorUnassigned: "Instruktor nieprzypisany",
        CourseUnassigned: "Kurs nieprzypisany",
        AccountMustBeEnableByAdmin:
          "Konto oczekuje na zatwierdzenie przez administratora",
        SettingPackageConfigUpdated: "Zaktualizowano konfigurację pakietu",
        CourseTutorAssigned: "Instruktor przypisany",
        AccountConfirmed: "Konto potwierdzone",
        ProductAddedToCart: "Produkt dodany do koszyka",
        ProductRemovedFromCart: "Produkt usunięty z koszyka",
      },
      Header: {
        Register: "Zarejestruj",
        Login: "Logowanie",
      },
      AcceptCheckbox: "Zaznaczając to pole, akceptujesz",
      PrivacyPolicy: "Politykę prywatności",
      TermsOfService: "Warunki usługi",
      EmailWasVerified: "Email został potwierdzony.",
      RateCourse: {
        ThankYou: "Dziękujemy za wystawienie oceny",
        ThankYouMessage: "Twoja ocena została zapisana",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "pl",
    // debug: true,
    //lng: "pl",
    //supportedLngs: ["pl", "en"],
    // fallbackLng: "pl",
    // lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
    },
  });

export default i18n;
