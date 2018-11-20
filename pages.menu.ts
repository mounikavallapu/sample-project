export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'home',
        data: {
          menu: {
            title: 'general.menu.home',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      //  {
      //   path: 'dashboard',
      //   data: {
      //     menu: {
      //       title: 'general.menu.dashboard',
      //       icon: 'ion-speedometer',
      //       selected: false,
      //       expanded: false,
      //       order: 50
      //     }
      //   }
      // },
      {
        path: 'accounts',
        data: {
          menu: {
            title: 'general.menu.accounts',
            icon: 'cusicon-accounts-icon',
            selected: false,
            expanded: false,
            order: 100
          }
        }
      },
      {
        path: 'Funds',
        data: {
          menu: {
            title: 'general.menu.fundtransfer',
            icon: 'ion-arrow-swap',
            selected: false,
            expanded: false,
            order: 150,
          }
        },
        children: [
          {
            path: 'ownAccount',
            data: {
              menu: {
                title: 'general.menu.ownaccount',
              }
            }
          },
          {
            path: 'ftBankMobile',
            data: {
              menu: {
                title: 'general.menu.bankmobile',
              }
            }
          },
          {
            path: 'ftBankaccount',
            data: {
              menu: {
                title: 'general.menu.bankaccount',
              }
            }
          },
          {
            path: 'ftotherbankneft',
            data: {
              menu: {
                title: 'general.menu.otherbankneft',
              }
            }
          },
          {
            path: 'ftotherbankimps',
            data: {
              menu: {
                title: 'general.menu.otherbankimps',
              }
            }
          },

          {
            path: 'ftimpsMobile',
            data: {
              menu: {
                title: 'general.menu.impsmobile',
              }
            }
          },

          {
            path: 'ftIimpsAadhaar',
            data: {
              menu: {
                title: 'general.menu.impsaadhaar',
              }
            }
          }

          
          // {
          //   path: 'ftIMPSMerchant',
          //   data: {
          //     menu: {
          //       title: 'general.menu.impsmerchant',
          //     }
          //   }
          // },


        ]
      },
      {
        path: 'payment',
        data: {
          menu: {
            title: 'general.menu.payment',
            icon: 'cusicon-payments-icon',
            selected: false,
            expanded: false,
            order: 200
          }
        }
      },
      // {
      //   path: 'service/servicesrequest',
      //   data: {
      //     menu: {
      //       title: 'general.menu.servicesrequest',
      //       icon: 'cusicon-cheque-icon',
      //       selected: false,
      //       expanded: false,
      //       order: 225
      //     }
      //   }
      // },
      {
        path: 'service/chequeService',
        data: {
          menu: {
            title: 'chequeServices.01',
            icon: 'cusicon-cheque-icon',
            selected: false,
            expanded: false,
            order: 525
          }
        }
      },
      {
        path: 'feedback',
        data: {
          menu: {
            title: 'general.menu.feedback/complaints',
            icon: 'ion-android-chat',
            selected: false,
            expanded: false,
            order: 250
          }
        }
      },
      //  {
      //   path: 'rewardpoints',
      //   data: {
      //     menu: {
      //       title: 'general.menu.rewards',
      //       icon: 'ion-ribbon-b',
      //       selected: false,
      //       expanded: false,
      //       order: 300
      //     }
      //   }
      // },
      //  {
      //   path: 'offerspage',
      //   data: {
      //     menu: {
      //       title: 'general.menu.offers',
      //       icon: 'fa fa-percent',
      //       selected: false,
      //       expanded: false,
      //       order: 450
      //     }
      //   }
      // },
      //    {
      //   path: 'loanpage',
      //   data: {
      //     menu: {
      //       title: 'general.menu.loan',
      //       icon: 'ion-clipboard',
      //       selected: false,
      //       expanded: false,
      //       order: 350
      //     }
      //   }
      // },
      //  {
      //   path: 'ticketpage',
      //   data: {
      //     menu: {
      //       title: 'general.menu.tickets',
      //       icon: 'ion-happy',
      //       selected: false,
      //       expanded: false,
      //       order: 400
      //     }
      //   }
      // },
      // {
      //   path: 'configurationpage',
      //   data: {
      //     menu: {
      //       title: 'general.menu.configuration',
      //       icon: 'fa fa-gear',
      //       selected: false,
      //       expanded: false,
      //       order: 425
      //     }
      //   },
      //  children: [
      //   {
      //     path: 'transactionlimit',
      //     data: {
      //       menu: {
      //         title: 'general.menu.transactionlimit',
      //       }
      //     }
      //   },
      //   {
      //     path: 'enabledisable',
      //     data: {
      //       menu: {
      //         title: 'general.menu.enabledisable',
      //       }
      //     }
      //   }
      // ]
      // },
      //  {
      //     path: 'QRcodeScanner',
      //     data: {
      //       menu: {
      //         title: 'QR code Scanner',
      //         icon: 'fa fa-book',
      //         selected: false,
      //         expanded: false,
      //         order: 655,
      //       }
      //     }
      //   },
      {
        path: 'settingspage',
        data: {
          menu: {
            title: 'general.menu.settings',
            icon: 'ion-settings',
            selected: false,
            expanded: false,
            order: 450
          }
        }
      },
      {
        path: 'profilepage',
        data: {
          menu: {
            title: 'general.menu.profile',
            icon: 'fa fa-user',
            selected: false,
            expanded: false,
            order: 500,
          }
        }
      },
      {
        path: 'shoppingpage',
        data: {
          menu: {
            title: 'general.menu.tickets',
            icon: 'fa fa-ticket',
            selected: false,
            expanded: false,
            order: 750,
          }
        }
      },
     {
        path: 'referafriend1',
        data: {
          menu: {
            title: 'general.menu.referafriend',
            icon: 'fa fa-users',
            selected: false,
            expanded: false,
            order: 560,
          }
        }
      },
      // {
      //   path: 'forexrate',
      //   data: {
      //     menu: {
      //       title: 'general.menu.forexrate',
      //       icon: 'ion-compose',
      //       selected: false,
      //       expanded: false,
      //       order: 550,
      //     }
      //   }
      // },
      {
        path: 'passbook',
        data: {
          menu: {
            title: 'PassbookMenu.21',
            icon: 'fa fa-book',
            selected: false,
            expanded: false,
            order: 650,
          }
        }
      }

    ]
  }
];
